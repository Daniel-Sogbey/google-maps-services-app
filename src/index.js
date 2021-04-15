const express = require("express");
const { Client } = require("@googlemaps/google-maps-services-js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());

const client = new Client({});

console.log(process.env.GOOGLE_API_KEY);

app.post("/dir", async (req, res) => {
	const { lat, lng } = req.body;
	console.log(req.body, lat, lng);
	try {
		const result = `https://maps.googleapis.com/maps/api/directions/json?origin=${(
			lat,
			lng
		)}
		&key=${process.env.GOOGLE_API_KEY}`;
		res.status(200).send(result.data);
	} catch (error) {
		res.status(403).send(error, "not working");
	}
});

app.listen(3000, () => console.log("server running on port 3000"));
