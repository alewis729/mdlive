const bot = { id: "0", name: "Bot" };
const users = [bot];

const joinUser = (id, name, room) => {
	const user = { id, name, room };
	users.push(user);
	console.log(`socketio users:`, users);
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
