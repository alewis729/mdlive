const {
	bot,
	joinUser,
	getUser,
	getRoomFromUserId,
	getRoomUsers,
	removeUserFromRoom,
} = require("./utils");

const initWSConnection = (io, socket) => {
	// user connect & disconnect
	socket.on("room-join", ({ roomId, username, role, content }) => {
		joinUser(roomId, socket.id, username, role, content);
		const room = getRoomFromUserId(socket.id);
		socket.join(room.id);
		socket.broadcast.to(room.id).emit("message", {
			...bot,
			message: `${username} joined the room.`,
		});
		io.to(room.id).emit("room-users", { users: getRoomUsers(room.id) });
		if (room.content) io.to(room.id).emit("new-md-change", { content });
	});

	socket.on("disconnect", () => {
		const user = removeUserFromRoom(socket.id);
		const room = getRoomFromUserId(socket.id);
		if (user && room) {
			io.to(room.id).emit("message", {
				...bot,
				message: `${user.name} left the room.`,
			});
			io.to(room.id).emit("room-users", { users: getRoomUsers(room.id) });
		}
	});

	// messaging
	socket.on("message", ({ message }) => {
		const room = getRoomFromUserId(socket.id);
		const user = getUser(room.id, socket.id);
		const { id, name } = user;
		io.to(room.id).emit("message", { id, name, message });
	});

	// md preview
	socket.on("md-change", ({ content }) => {
		const room = getRoomFromUserId(socket.id);
		io.to(room.id).emit("new-md-change", { content });
	});
};

module.exports = initWSConnection;
