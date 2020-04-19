const {
	bot,
	joinUser,
	getUser,
	// getRoomUsers,
	removeUserFromRoom,
} = require("./utils/users");

const initWSConnection = (io, socket) => {
	// user connect & disconnect
	socket.on("room-join", ({ username, room }) => {
		const user = joinUser(socket.id, username, room);
		socket.join(user.room);
		socket.broadcast.to(user.room).emit("message", {
			...bot,
			message: `${username} joined the room.`,
		});
	});

	socket.on("disconnect", () => {
		const user = removeUserFromRoom(socket.id);
		if (user) {
			io.to(user.room).emit("message", {
				...bot,
				message: `${user.name} left the room.`,
			});
		}
	});

	// messaging
	socket.on("message", ({ message }) => {
		const user = getUser(socket.id);
		const { id, name } = user;
		io.to(user.room).emit("message", { id, name, message });
	});

	// md preview
};

module.exports = initWSConnection;
