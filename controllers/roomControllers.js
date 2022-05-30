import Room from '../models/room';

// Create all rooms   =>   /api/rooms
const allRooms = async (req, res) => {
	const rooms = await Room.find();

	try {
		res.status(200).json({
			success: true,
			count: rooms.length,
			rooms,
		});
	} catch (error) {
		success: false;
		error: error.message;
	}
};

// Create new room   =>   /api/rooms
const newRoom = async (req, res) => {
	try {
		const room = await Room.create(req.body);

		res.status(200).json({
			success: true,
			room,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

export { allRooms, newRoom };
