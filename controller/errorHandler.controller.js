module.exports = (err, req, res, next) => {
	if (
		err.message === "Url field cannot be empty" ||
		"Please send in a valid url"
	) {
		return res.status(400).send({ error: err.message });
	}
	console.log(err);
	return res.status(500).send({ error: "Internal Server Error" });
};
