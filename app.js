const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("tiny"));

app.listen(port, () => {
	console.log(`Server is listening at port: ${port}`);
});
