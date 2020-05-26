const {
	bot,
	findNewAuthor,
	getUser,
	getRoomFromUserId,
	getRoomUsers,
	joinUser,
	removeRoom,
	removeUserFromRoom,
	updateUser,
} = require("./utils");

const initWSConnection = (io, socket) => {
	socket.on("room-join", ({ roomId, username, role, content }) => {
		// console.log("> new connection:", socket.id);
		joinUser(roomId, socket.id, username, role, content);
		const room = getRoomFromUserId(socket.id);
		socket.join(room.id);
		io.to(socket.id).emit("room-join-authenticated", { content: room.content });
		socket.broadcast.to(room.id).emit("message", {
			...bot,
			message: `${username} joined the room.`,
		});
		io.to(room.id).emit("room-users", { users: getRoomUsers(room.id) });
		// if (room.users[0].id !== socket.id) {
		// 	io.to(room.users[0].id).emit("refresh-content");
		// }
	});

	socket.on("disconnect", () => {
		const room = getRoomFromUserId(socket.id);
		if (room && room.id) {
			const user = getUser(room.id, socket.id);
			const removeAndNotifyClient = () => {
				if (!user) return null;
				removeUserFromRoom(room.id, socket.id);
				io.to(room.id).emit("message", {
					...bot,
					message: `${user.name} left the room.`,
				});
				io.to(room.id).emit("room-users", { users: getRoomUsers(room.id) });
			};

			if (user && user.role === "author") {
				const newAuthor = findNewAuthor(room.users);
				if (!newAuthor) removeRoom(room.id);
				else updateUser(room.id, newAuthor.id, { role: "author" });
			}
			removeAndNotifyClient();
		}
		socket.disconnect(true);
	});

	socket.on("kick-user", ({ id }) => {
		const room = getRoomFromUserId(socket.id);
		const currentUser = getUser(room.id, socket.id);
		if (
			currentUser &&
			currentUser.id !== id &&
			currentUser.role === "author" &&
			io.sockets.sockets[id]
		) {
			const user = removeUserFromRoom(room.id, id);
			io.to(id).emit("kick");
			io.sockets.sockets[id].disconnect();
			io.to(room.id).emit("room-users", { users: getRoomUsers(room.id) });
			io.to(room.id).emit("message", {
				...bot,
				message: `${user.name} was kicked by ${currentUser.name}.`,
			});
		}
	});

	socket.on("role-update", ({ id, role }) => {
		const room = getRoomFromUserId(socket.id);
		const currentUser = getUser(room.id, socket.id);
		if (currentUser.role === "author") {
			const user = getUser(room.id, id);
			if (
				currentUser &&
				currentUser.id !== id &&
				currentUser.role === "author" &&
				user
			) {
				updateUser(room.id, id, { role });
				if (role === "author") {
					updateUser(room.id, socket.id, { role: "editor" });
				}
				io.to(room.id).emit("room-users", { users: getRoomUsers(room.id) });
			}
		}
	});

	socket.on("message", ({ message }) => {
		const room = getRoomFromUserId(socket.id);
		const user = getUser(room.id, socket.id);
		const { id, name } = user;
		io.to(room.id).emit("message", { id, name, message });
	});

	socket.on("md-change", ({ content }) => {
		const room = getRoomFromUserId(socket.id);
		const user = getUser(room.id, socket.id);
		if (user && ["author", "editor"].includes(user.role)) {
			socket.broadcast.to(room.id).emit("md-change", { content });
		}
	});
};

module.exports = initWSConnection;
