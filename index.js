const express = require('express');
const path = require('path');
const app = express();
 
// BAS requires a dynamic port.
// If no env variable exists, fall back to 0.
const port = process.env.PORT || 8080;
 
// Serve static HTML files from "public" folder
app.use(express.static(path.join(__dirname, "public")));
 
// Root endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
 
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});