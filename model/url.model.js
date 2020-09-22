const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const urlSchema = new Schema(
	{
		longUrl: {
			type: String,
			required: true,
		},
		shortUrl: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

urlSchema.pre("save", function (next) {
	if (
		this.longUrl.indexOf("http://") === -1 &&
		this.longUrl.indexOf("https://") === -1
	) {
		this.longUrl = "http://" + this.longUrl;
	}
	next();
});

const Url = mongoose.model("url", urlSchema);

module.exports = Url;
