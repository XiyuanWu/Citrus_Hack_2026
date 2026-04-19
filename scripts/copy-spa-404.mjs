import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const index = path.join(dist, "index.html");
const notFound = path.join(dist, "404.html");

if (!fs.existsSync(index)) {
  console.error("copy-spa-404: dist/index.html missing — run vite build first.");
  process.exit(1);
}
fs.copyFileSync(index, notFound);
fs.writeFileSync(path.join(dist, ".nojekyll"), "");
console.log(
  "copy-spa-404: wrote dist/404.html and dist/.nojekyll (GitHub Pages SPA).",
);
