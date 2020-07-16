exports.getHomepage = (req, res, next) => {
  res.json({ message: "inside homepage" });
};

exports.postTeeny = (req, res, next) => {
  console.log(req.body.teeny);
  res.send("inside post teeny");
};
