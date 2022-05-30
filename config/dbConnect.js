const mongoose = require('mongoose');

const dbConnect = () => {
	if (mongoose.connection.readyState >= 1) {
		return;
	}

	mongoose.connect(process.env.DB_ATLAS_URI);
};

export default dbConnect;
