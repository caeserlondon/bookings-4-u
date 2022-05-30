const Room = require('../models/room');
const mongoose = require('mongoose');
const rooms = require('../data/rooms');

mongoose.connect(
	`mongodb+srv://caeserlondon:caeserlondon@bookings-4-you.bqrds.mongodb.net/?retryWrites=true&w=majority`
);

const seedRooms = async () => {
	try {
		await Room.deleteMany();
		console.log('Rooms are deleted');

		await Room.insertMany(rooms);
		console.log('All Rooms are added.');

		process.exit();
	} catch (error) {
		console.log(error.message);
		process.exit();
	}
};

seedRooms();
