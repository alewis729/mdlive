const bot = { id: "0", name: "Bot" };
const users = [bot];

const joinUser = (room, id, name, role) => {
	const user = { room, id, name, role };
	users.push(user);
	return user;
};

const getUser = id => users.find(user => user.id === id);

const getRoomUsers = room => users.filter(user => user.room === room);

const removeUserFromRoom = id => {
	const index = users.findIndex(user => user.id === id);
	if (index === -1) return null;
	return users.splice(index, 1)[0];
};

module.exports = { bot, joinUser, getUser, getRoomUsers, removeUserFromRoom };
