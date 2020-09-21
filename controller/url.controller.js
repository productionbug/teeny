const { customAlphabet } = require("nanoid");
const validator = require("validator");

const Url = require("../model/url.model");

exports.getHomepage = (req, res, next) => {
    res.render("index.ejs", {
        // url: { teeny: "undefined" },
        url: { teeny: "teeny.cc" },
    });
};

exports.postTeeny = async (req, res, next) => {
    const longUrl = req.body.url;

    try {
        if (!longUrl) {
            throw new Error("Url field cannot be empty");
        } else if (!validator.isURL(longUrl)) {
            throw new Error("Please send in a valid url");
        }

        const nanoid = customAlphabet(
            "1234567890abcdefghigklmnopqrstuvwxyz",
            9
        );

        // Creating a new Url Schema and saving it to the database
        const shortUrl = nanoid();
        const url = await Url.create({ longUrl, shortUrl });
        const result = {
            // teeny: `https://teeny.cc/${url.toObject().shortUrl}`,
            teeny: `https://teeny-nn.herokuapp.com/${url.toObject().shortUrl}`,
        };
        res.status(201);

        res.render("index.ejs", { url: result });
    } catch (e) {
        next(e);
    }
};

exports.getLongUrl = async (req, res, next) => {
    const shortUrl = req.params.shorturl;
    try {
        const url = await Url.findOne({ shortUrl }).lean().exec();
        if (url === null) {
            //Call 404 here
            // return res.status(404).send("URL not found");
            return next();
        }
        // Redirect here
        return res.send(url.longUrl);
    } catch (e) {
        return next(e);
    }
};

// TODO: Call res.redirect()
