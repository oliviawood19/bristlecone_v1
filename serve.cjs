const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const PORT = process.env.PORT || 5000;
const DIST = path.join(__dirname, "dist");

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".webmanifest": "application/manifest+json",
};

const COMPRESSIBLE = new Set([
  "text/html",
  "application/javascript",
  "text/css",
  "application/json",
  "image/svg+xml",
  "application/xml",
  "text/plain",
]);

function serveFile(req, res, filePath, cacheControl) {
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  const headers = { "Content-Type": contentType };
  if (cacheControl) {
    headers["Cache-Control"] = cacheControl;
  }

  const acceptEncoding = (req.headers["accept-encoding"] || "").toString();
  const shouldCompress = COMPRESSIBLE.has(contentType);

  if (shouldCompress && acceptEncoding.includes("gzip")) {
    headers["Content-Encoding"] = "gzip";
    headers["Vary"] = "Accept-Encoding";
    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);
    return;
  }

  const stream = fs.createReadStream(filePath);
  res.writeHead(200, headers);
  stream.pipe(res);
  stream.on("error", () => {
    res.writeHead(500);
    res.end("Internal Server Error");
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let filePath = path.join(DIST, decodeURIComponent(url.pathname));

  const isAssets = url.pathname.startsWith("/assets/");
  const cacheControl = isAssets
    ? "public, max-age=31536000, immutable"
    : "public, max-age=0, must-revalidate";

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    serveFile(req, res, filePath, cacheControl);
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexPath = path.join(filePath, "index.html");
    if (fs.existsSync(indexPath)) {
      serveFile(req, res, indexPath, "public, max-age=0, must-revalidate");
      return;
    }
  }

  serveFile(req, res, path.join(DIST, "index.html"), "public, max-age=0, must-revalidate");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
