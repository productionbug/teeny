const mongoose = require("mongoose");

const connect = (uri) => {
	return mongoose.connect(uri, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});
};

module.exports = connect;
