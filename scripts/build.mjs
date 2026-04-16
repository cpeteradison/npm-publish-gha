import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const sourceDir = path.join(rootDir, "src");
const distDir = path.join(rootDir, "dist");

async function build() {
  await mkdir(distDir, { recursive: true });
  await cp(path.join(sourceDir, "index.js"), path.join(distDir, "index.js"));
  await cp(path.join(sourceDir, "README.md"), path.join(distDir, "README.md"));

  const pkg = JSON.parse(await readFile(path.join(sourceDir, "package.json"), "utf8"));
  pkg.repository = {
    ...pkg.repository,
    directory: ".",
  };

  await writeFile(
    path.join(distDir, "package.json"),
    `${JSON.stringify(pkg, null, 2)}\n`,
    "utf8",
  );
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
