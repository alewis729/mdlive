// socket.on("joinRoom", ({ username, room }) => {
// 	const user = userJoin(socket.id, username, room);
// 	socket.join(user.room);
// 	// Welcome current user
// 	socket.emit("message", formatMessage(botName, "Welcome to ChatCord!"));
// 	// Broadcast when a user connects
// 	socket.broadcast
// 		.to(user.room)
// 		.emit(
// 			"message",
// 			formatMessage(botName, `${user.username} has joined the chat`)
// 		);
// 	// Send users and room info
// 	io.to(user.room).emit("roomUsers", {
// 		room: user.room,
// 		users: getRoomUsers(user.room),
// 	});
// });
// // Listen for chatMessage
// socket.on("chatMessage", msg => {
// 	const user = getCurrentUser(socket.id);
// 	io.to(user.room).emit("message", formatMessage(user.username, msg));
// });
// // Runs when client disconnects
// socket.on("disconnect", () => {
// 	const user = userLeave(socket.id);
// 	if (user) {
// 		io.to(user.room).emit(
// 			"message",
// 			formatMessage(botName, `${user.username} has left the chat`)
// 		);
// 		// Send users and room info
// 		io.to(user.room).emit("roomUsers", {
// 			room: user.room,
// 			users: getRoomUsers(user.room),
// 		});
// 	}
// });

const initWSConnection = (io, socket) => {
	console.log("👍 New socket connection; id:", socket.id);
	socket.emit("message", "Welcome to the room.");
	socket.broadcast.emit("message", "New user joined the room.");
	socket.emit("disconnect", () => {
		io.emit("message", "User left the room.");
	});
};

module.exports = initWSConnection;
