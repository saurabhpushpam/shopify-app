const express = require('express');
const Shopify = require('@shopify/shopify-api');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Shopify context with API key and secret
Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: ['read_products'], // You can modify this based on your app needs
  HOST_NAME: 'your_ngrok_tunnel_url', // We'll set this later
  IS_EMBEDDED_APP: true,
  API_VERSION: Shopify.Context.API_VERSIONS.October23, // Adjust to the current version
});

app.get('/', (req, res) => {
  res.send('Hello from Shopify App!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
