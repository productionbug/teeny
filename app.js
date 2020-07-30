const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const connect = require("./db/connect");
const urlRoutes = require("./routes/url.route");

const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use(urlRoutes);

connect("mongodb://localhost:27017/teeny")
	.then((connection) => {
		console.log("Database server is running at port: 27017");
		app.listen(port, () => {
			console.log(`Server is listening at port: ${port}`);
		});
	})
	.catch((e) => {
		console.error(e);
	});
