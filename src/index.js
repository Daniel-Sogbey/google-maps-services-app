// const express = require("express");
const { Client } = require("@googlemaps/google-maps-services-js");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({});

console.log(process.env.GOOGLE_API_KEY);

client
	.elevation({
		params: {
			locations: [{ lat: 45, lng: -110 }],
			key: process.env.GOOGLE_API_KEY,
		},
		timeout: 1000, // milliseconds
	})
	.then(error => {
		console.log(error);
	})
	.catch(e => {
		console.log(e.response.data.error_message);
	});
