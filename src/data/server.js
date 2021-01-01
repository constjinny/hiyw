const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

const adapter = new FileSync("./src/data/db.json");
const db = low(adapter);

server.use(middlewares);
server.use(bodyParser.json());

// user 전체 데이터
server.get("/users", (req, res) => {
  const resultData = db.get("users").value();
  res.send(resultData);
});

// contents 전체 데이터
server.get("/contents", (req, res) => {
  const resultData = db.get("contents").value();
  res.send(resultData);
});

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});
