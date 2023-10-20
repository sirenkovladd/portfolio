import { createServer } from 'vite';
import { minify } from 'minify'
import { writeFile, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

async function main() {
  const server = await createServer({
    logLevel: "info",
    server: {
      middlewareMode: true
    }
  });
  const { render } = await server.ssrLoadModule("./src/entry-server.tsx");
  const html = await render();
  server.close();
  const hm = await minify.html(html);
  const cm = await minify('./src/main.css');
  await mkdir('./dist', { recursive: true });
  await writeFile(resolve('.', 'dist', 'index.html'), hm);
  await writeFile(resolve('.', 'dist', 'main.css'), cm);
}

main().catch((err) => { console.error(err); process.exit(1); });
