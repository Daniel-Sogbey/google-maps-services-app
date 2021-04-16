const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

// const { Client } = require("@googlemaps/google-maps-services-js");

const app = express();

const key = process.env.GOOGLE_API_KEY;

app.get("/", async (req, res, next) => {
	try {
		const neighborhood = "chelsea";
		const borough = "manhattan";
		const city = "new+york+city";
		const category = "burgers";
		const { data } = await axios.get(
			`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${key}`
		);
		console.log(data);
		res.send(data);
	} catch (err) {
		console.log(err);
	}
});

app.listen(3000, () => console.log("Server on"));
