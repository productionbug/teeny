const { customAlphabet } = require("nanoid");

exports.getHomepage = (req, res, next) => {
	res.json({ message: "inside homepage" });
};

exports.postTeeny = (req, res, next) => {
	const nanoid = customAlphabet("1234567890abcdefghigklmnopqrstuvwxyz", 9);
	const shortUrl = nanoid();
	console.log("Here is the shortURL: ", shortUrl);

	res.send("inside post teeny");
};

exports.getLongUrl = (req, res, next) => {
	console.log(req.params.shorturl);
	res.json({ message: "inside longurl" });
};
