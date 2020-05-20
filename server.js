const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.Server(app);
const io = require("socket.io")(server);
const initWSConnection = require("./socket/main");

const port = parseInt(process.env.PORT, 10) || 5000;

io.on("connection", (socket) => initWSConnection(io, socket));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("build"));
	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "build", "index.html"))
	);
}

server.listen(port, (err) => {
	if (err) throw err;
	console.log("---------- ---------- ---------- ---------- ----------");
	console.log(`> 🚀 Ready on port: ${port}`);
});
