const allRooms = (req, res) => {
	res.status(200).json({
		success: true,
		messege: 'all rooms',
	});
};
export { allRooms };
