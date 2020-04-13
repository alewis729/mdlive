const bot = { id: "0", name: "Bot" };
const users = [bot];

const initWSConnection = (io, socket) => {
	socket.broadcast.emit("message", {
		...bot,
		message: "New user joined the room.",
	});

	socket.on("user-connect", ({ name, room }) => {
		users.push({ id: socket.id, name, room });
		console.log(users);
	});

	socket.on("message", ({ id, name, message }) => {
		io.emit("message", { id, name, message });
	});

	socket.on("disconnect", () => {
		const index = users.findIndex(user => user.id === socket.id);
		if (index !== -1) {
			const user = users.splice(index, 1)[0];
			io.emit("message", { ...bot, message: `${user.name} left the room.` });
		}
	});
};

module.exports = initWSConnection;
