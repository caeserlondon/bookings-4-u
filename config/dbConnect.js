import mongoose from 'mongoose';

const dbConnect = () => {
	if (mongoose.connection.readyState >= 1) {
		return;
	}

	mongoose.connect(process.env.DB_LOCAL_URI);
	// .then(console.log('Connected to local database'));
};

export default dbConnect;

// import mongoose from 'mongoose';

// const dbConnect = () => {
// 	if (mongoose.connection.readyState >= 1) {
// 		return;
// 	}

// 	mongoose.connect(process.env.DB_LOCAL_URI, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useFindAndModify: false,
// 		UseCreateIndex: true,
// 	});
// };

// export default dbConnect;
