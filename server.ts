import * as http from "node:http";
import { router } from "./src/router.js";

const port = 8080;

const server = http.createServer(async (req, res) => {
  if (req.url === '/main.css') {
    const css = await router['main.css']();
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css; charset=utf-8");
    res.end(css);
    return;
  }
  if (req.url === '/index.js') {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/javascript; charset=utf-8");
    res.end(await router['index.js']());
    return;
  }
  const html = await router['index.html']();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
});

server.listen(port, () => console.log(`Server running at http://localhost:${port}/`));
