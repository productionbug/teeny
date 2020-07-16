const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Server is listening at port: ${port}`);
});
