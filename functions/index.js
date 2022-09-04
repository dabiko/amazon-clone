const functions = require("firebase-functions");
const express = require("express");
// const cors = require("cors");

// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51L40a1JKeAGt7TbFHy59DMJYoWL97qhvQHvlXY738HOgFbkbZ1HwWKXv18pvL7tkczSfaBcFFN3YctOTEkupPM1B00dd71ikSP");
// const stripe = require("stripe")(functions.config().stripe.secret_key);

// API

// APP Configuration
const app = express();

// Middleware
// app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) =>
  response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Received Successfully", total, "EUR");
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api=functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-78fda/us-central1/api
