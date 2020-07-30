const { customAlphabet } = require("nanoid");

exports.getHomepage = (req, res, next) => {
  res.json({ message: "inside homepage" });
};

exports.postTeeny = (req, res, next) => {
  const nanoid = customAlphabet(/^[A-Za-z0-9]+$/, 9);
  const shortUrl = nanoid();
  console.log("Here is the shortURL: ", shortUrl);
  //   console.log(req.body.teeny);
  res.send("inside post teeny");
};

exports.getLongUrl = (req, res, next) => {
  console.log(req.params.shorturl);
  res.json({ message: "inside longurl" });
};
