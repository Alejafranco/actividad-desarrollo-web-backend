/**
 * Archivo principal API
 */
const express = require('express');
const router = require('./app/routers/index');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use("/reportes", express.static(path.join(__dirname, "reportes")));

app.use(express.json());
app.use('/', router);


const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:3001`)
});