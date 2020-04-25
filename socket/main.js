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
		console.log(socket.id);
		joinUser(roomId, socket.id, username, role, content);
		const room = getRoomFromUserId(socket.id);
		socket.join(room.id);
		socket.broadcast.to(room.id).emit("message", {
			...bot,
			message: `${username} joined the room.`,
		});
		io.to(room.id).emit("room-users", { users: getRoomUsers(room.id) });
		if (room.users[0].id !== socket.id) {
			io.to(room.users[0].id).emit("refresh-content");
		}
	});

	socket.on("disconnect", () => {
		const room = getRoomFromUserId(socket.id);
		if (room && room.id) {
			const user = removeUserFromRoom(room.id, socket.id);
			if (user) {
				io.to(room.id).emit("message", {
					...bot,
					message: `${user.name} left the room.`,
				});
				io.to(room.id).emit("room-users", { users: getRoomUsers(room.id) });
			}
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
