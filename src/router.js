import { minify } from "minify";
import { build } from "esbuild";
import { writeFile, mkdir, readFile } from "node:fs/promises";
import van from "mini-van-plate/van-plate";

export const router = {
  'index.js': async () => {
    const js = await build({
      bundle: true,
      minify: true,
      entryPoints: ["./src/index.js"],
      write: false,
    });
    return js.outputFiles[0].text;
  },
  'index.html': async () => {
    const App = await import("./App.ts");
    const template = await readFile("./index.html", "utf-8");
    const appHtml = App.default({ van }).render();
    const html = template.replace("<!--ssr-outlet-->", appHtml);
    const hm = await minify.html(html, {html: {
      removeAttributeQuotes: false,
    }});
    return hm;
  },
  'main.css': async () => {
    const cm = await minify("./src/main.css");
    return cm;
  },
}
