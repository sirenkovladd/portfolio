import { writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { router } from "./src/router.js";

async function main() {
  const js = await router["index.js"]();
  const hm = await router["index.html"]();
  const cm = await router["main.css"]();

  await mkdir("./dist", { recursive: true });
  await writeFile(resolve(".", "dist", "index.html"), hm);
  await writeFile(resolve(".", "dist", "main.css"), cm);
  await writeFile(resolve(".", "dist", "index.js"), js);
  console.log("done", new Date().toLocaleString());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
