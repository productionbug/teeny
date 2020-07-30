const { customAlphabet } = require("nanoid");
const Url = require("../model/url.model");

exports.getHomepage = (req, res, next) => {
  res.json({ message: "inside homepage" });
};

exports.postTeeny = async (req, res, next) => {
  const nanoid = customAlphabet("1234567890abcdefghigklmnopqrstuvwxyz", 9);
  const shortUrl = nanoid();
  const longUrl = req.body.url;

  try {
    const url = await Url.create({ longUrl, shortUrl });
    res.status(201).send(url.toObject());
  } catch (e) {
    console.log(e);
  }
};

exports.getLongUrl = (req, res, next) => {
  console.log(req.params.shorturl);
  res.json({ message: "inside longurl" });
};
