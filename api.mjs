import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/hello") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Server got du hond: " + (body || "<empty>"));
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not Found");
});

server.listen(3001, "::", () => {
  console.log("API listening on http://localhost:3001 (IPv4+IPv6)");
});
