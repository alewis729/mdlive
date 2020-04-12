const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const initWSConnection = require("./socket/main");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// init middlewares
app.use(express.json({ extended: false }));

// define routes
app.use("/api/groups", require("./routes/groups"));

io.on("connection", socket => initWSConnection(io, socket));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
	console.log("---------- ---------- ---------- ---------- ----------");
	console.log(`🚀 Server ready on port ${PORT}`);
});
