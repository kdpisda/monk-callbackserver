const express = require('express')
var winston = require("winston"),
  expressWinston = require("express-winston");
var bodyParser = require("body-parser");
const util = require('util')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// expressWinston.requestWhitelist.push('body');

// app.use(
//   expressWinston.logger({
//     transports: [new winston.transports.Console()],
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.json()
//     ),
//     meta: true, // optional: control whether you want to log the meta data about the request (default to true)
//     msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
//     expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
//     colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
//     ignoreRoute: function (req, res) {
//       return false;
//     }, // optional: allows to skip some log messages based on request and/or response
//   })
// );

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(JSON.stringify(req.body, null, 4));
  // console.log(req.body);
  // console.log(req.data);
  // console.log(typeof req.body.body);
  // console.log(req.body.body.id);
  // console.log(util.inspect(req.body, {depth: null}))
  // console.log(req.body);
  res.send({"message": "gotcha"})
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
