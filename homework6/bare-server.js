const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/slow-file") {
    console.time("slow");
    const data = fs.readFileSync("large-file.txt", "utf-8");
    console.timeEnd("slow");
    res.end("Slow file read done");
  }

  if (req.url === "/fast-file") {
    console.time("fast");
    fs.readFile("large-file.txt", "utf-8", (err, data) => {
      console.timeEnd("fast");
      if (err) {
        res.statusCode = 500;
        return res.end("Error reading file");
      }
      res.end("Fast file read done");
    });
  }
});

server.listen(3001, () => {
  console.log("Bare server running on http://localhost:3001");
});
