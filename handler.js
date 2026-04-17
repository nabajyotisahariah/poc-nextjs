const express = require("express");
const next = require("next");
const serverless = require("serverless-http");

const app = next({ dev: false });
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
  server.all("*", (req, res) => handle(req, res));
});

module.exports.handler = serverless(server);