// Minimal local static server for yoga variants.
// Key feature: HTML references images as bare filenames (e.g. "foo.jpg"),
// so we map requests like "/foo.jpg" to "WEBSITES/assets/foo.jpg".

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

function parseArgs(argv) {
  const args = { variant: null, port: 3000, host: "127.0.0.1" };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = argv[i + 1];
    if (a === "--variant") args.variant = next;
    if (a === "--port") args.port = Number(next);
    if (a === "--host") args.host = next;
  }
  return args;
}

function safeJoin(baseDir, relativePath) {
  // Prevent path traversal by resolving and ensuring the result stays under baseDir.
  const baseResolved = path.resolve(baseDir);
  const targetResolved = path.resolve(baseDir, relativePath);
  const sep = path.sep;
  if (
    targetResolved !== baseResolved &&
    !targetResolved.startsWith(baseResolved + sep)
  ) {
    throw new Error("Path traversal attempt blocked");
  }
  return targetResolved;
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml; charset=utf-8",
  ".mov": "video/quicktime",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

function contentTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME[ext] || "application/octet-stream";
}

function fileExists(filePath) {
  try {
    const stat = fs.statSync(filePath);
    return stat.isFile();
  } catch {
    return false;
  }
}

function readFile(filePath) {
  return fs.readFileSync(filePath);
}

const args = parseArgs(process.argv.slice(2));
if (!args.variant) {
  console.log(
    "Usage: node scripts/serve-yoga-variant.js --variant <variantName> --port <port> [--host <host>]",
  );
  process.exit(1);
}

const rootDir = path.resolve(__dirname, "..");
const variantDir = path.join(rootDir, "yoga", "sites", args.variant);
const assetsDir = path.join(rootDir, "assets");
const indexPath = path.join(variantDir, "index.html");

if (!fileExists(indexPath)) {
  console.error(
    `Variant not found (missing index.html): ${path.relative(rootDir, indexPath)}`,
  );
  process.exit(1);
}

const server = http.createServer((req, res) => {
  // Only deal with paths (ignore querystring).
  const parsed = url.parse(req.url || "/");
  const pathname = decodeURIComponent(parsed.pathname || "/");

  const method = req.method || "GET";
  if (method !== "GET" && method !== "HEAD") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Method Not Allowed");
    return;
  }

  let resolvedPath = null;

  try {
    // Serve the variant index at "/" and "/index.html".
    if (pathname === "/" || pathname === "/index.html") {
      resolvedPath = indexPath;
    } else if (pathname.startsWith("/assets/")) {
      // Explicit assets path.
      const rel = pathname.slice("/assets/".length);
      resolvedPath = safeJoin(assetsDir, rel);
    } else if (pathname.startsWith("/")) {
      // HTML uses bare filenames like "/618640629_..._n.jpg".
      const rel = pathname.slice(1);
      if (!rel.includes("/") && !rel.includes("..")) {
        const ext = path.extname(rel).toLowerCase();
        if (
          [
            ".jpg",
            ".jpeg",
            ".png",
            ".webp",
            ".gif",
            ".svg",
            ".mov",
            ".mp4",
            ".webm",
          ].includes(ext)
        ) {
          const assetCandidate = safeJoin(assetsDir, rel);
          if (fileExists(assetCandidate)) resolvedPath = assetCandidate;
        }
      }

      // Fallback: treat it as a file inside the variant directory.
      if (!resolvedPath) {
        const rel2 = pathname.slice(1);
        resolvedPath = safeJoin(variantDir, rel2);
      }
    }
  } catch (e) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Bad Request");
    return;
  }

  if (!resolvedPath || !fileExists(resolvedPath)) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Not Found");
    return;
  }

  const contentType = contentTypeFor(resolvedPath);
  // Keep it simple: no aggressive caching while iterating.
  res.setHeader("Content-Type", contentType);
  res.setHeader("Cache-Control", "no-cache");

  try {
    const data = readFile(resolvedPath);
    res.statusCode = 200;
    if (method === "HEAD") {
      res.end();
    } else {
      res.end(data);
    }
  } catch {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }

  // Lightweight logging.
  // eslint-disable-next-line no-console
  console.log(
    `${method} ${pathname} -> ${path.relative(rootDir, resolvedPath)}`,
  );
});

server.listen(args.port, args.host, () => {
  console.log(`Yoga server running: http://${args.host}:${args.port}/`);
  console.log(`Variant: ${args.variant}`);
  console.log(`Assets: ${path.relative(rootDir, assetsDir)}`);
});
