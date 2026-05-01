const { createServer } = require("http");
const next = require("next");

const app = next({
  dev: false,
  conf: { distDir: ".next" }
});

const handle = app.getRequestHandler();

let server;

exports.handler = async (event, context) => {
  if (!server) {
    await app.prepare();
    server = createServer((req, res) => {
      handle(req, res);
    });
  }

  return {
    statusCode: 200,
    body: "Next.js running on Lambda"
  };
};