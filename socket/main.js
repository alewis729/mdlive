const {
	bot,
	joinUser,
	// getUser,
	// getRoomUsers,
	removeUserFromRoom,
} = require("./utils/users");

const initWSConnection = (io, socket) => {
	socket.on("room-join", ({ username, room }) => {
		const user = joinUser(socket.id, username, room);
		socket.join(user.room);
		socket.broadcast.to(user.room).emit("message", {
			...bot,
			message: `${username} joined the room.`,
		});
	});

	// socket.on("user-connect", ({ name, room }) => {
	// 	users.push({ id: socket.id, name, room });
	// 	console.log(users);
	// });

	// socket.on("message", ({ id, name, message }) => {
	// 	io.emit("message", { id, name, message });
	// });

	socket.on("disconnect", () => {
		const user = removeUserFromRoom(socket.id);

		if (user) {
			console.log(`${user.name} disconnected.`);
			io.to(user.room).emit("message", {
				...bot,
				message: `${user.name} left the room.`,
			});
		}
	});
};

module.exports = initWSConnection;
