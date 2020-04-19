const http = require("http");
const next = require("next");
const express = require("express");
const socketio = require("socket.io");
const initWSConnection = require("./socket/main");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

io.on("connection", socket => initWSConnection(io, socket));

nextApp.prepare().then(() => {
	app.all("*", (req, res) => nextHandler(req, res));

	server.listen(port, err => {
		if (err) throw err;
		console.log("---------- ---------- ---------- ---------- ----------");
		console.log(`> 🚀 Ready on http://localhost:${port}`);
	});
});
