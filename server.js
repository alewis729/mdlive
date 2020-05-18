const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);
const io = require("socket.io")(server);
const initWSConnection = require("./socket/main");

const port = process.env.PORT || 5000;

io.on("connection", (socket) => initWSConnection(io, socket));

server.listen(port, (err) => {
	if (err) throw err;
	console.log("---------- ---------- ---------- ---------- ----------");
	console.log(`> 🚀 Ready on port: ${port}`);
});
