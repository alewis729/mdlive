/**
 * db model
 */
/**
rooms: [
	{
		id: "xxx-xxx",
		content: "...",
		users: [
			{
				id: "socket.id",
				name: "alfred",
				role: "editor",
			},
		],
	},
];
 */

const bot = { id: "0", name: "Bot" };
const rooms = [];

const getRoom = id => {
	const roomIndex = rooms.findIndex(room => room.id === id);
	if (roomIndex === -1) return { roomIndex, room: null };
	return { roomIndex, room: rooms[roomIndex] };
};

const getRoomFromUserId = id => {
	for (let i = 0; i < rooms.length; i++) {
		const userIndex = rooms[i].users.findIndex(user => user.id === id);
		if (userIndex !== -1) return rooms[i];
	}
	return null;
};

const getRoomUsers = roomId => {
	const { room } = getRoom(roomId);
	if (!room) return null;
	return room.users;
};

const removeUserFromRoom = (roomId, id) => {
	const { room, roomIndex } = getRoom(roomId);
	if (!room) return null;

	const userIndex = room.users.findIndex(user => user.id === id);
	if (userIndex === -1) return null;
	return rooms[roomIndex].users.splice(userIndex, 1)[0];
};

const joinUser = (roomId, id, name, role, content) => {
	const user = { id, name, role };
	const { room, roomIndex } = getRoom(roomId);
	let finalRoom = {};

	if (room) {
		rooms[roomIndex].users.push(user);
		finalRoom = rooms[roomIndex];
	} else {
		finalRoom = {
			id: roomId,
			content,
			users: [user],
		};
		rooms.push(finalRoom);
	}

	return { room: finalRoom, user };
};

const getUser = (roomId, id) => {
	const { room } = getRoom(roomId);
	if (!room) return null;

	return room.users.find(user => user.id === id);
};

const updateUser = (roomId, id, params) => {
	const { room, roomIndex } = getRoom(roomId);
	if (!room) return null;

	const user = room.users.find(user => user.id === id);
	if (!user) return null;
	const newUser = {
		id,
		name: params.name ? params.name : user.name,
		role: params.role ? params.role : user.role,
	};
	const currentUsers = rooms[roomIndex].users;
	rooms[roomIndex].users = currentUsers.map(user =>
		user.id !== newUser.id ? user : newUser
	);
	return true;
};

module.exports = {
	bot,
	joinUser,
	getUser,
	getRoomFromUserId,
	getRoomUsers,
	updateUser,
	removeUserFromRoom,
};
