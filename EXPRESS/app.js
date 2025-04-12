const express = require('express'),
bodyParser = require('body-parser'),
swaggerUi = require("swagger-ui-express");
const cors = require('cors');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8888;

const specs = require('./specs');

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Swagger URL: localhost:8888/api
app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);


const userRoutes = require('./routes/userRoutes');
const genericRoutes = require('./routes/genericRoutes');
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', genericRoutes);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

// app.use(cors());
app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/ping", (request, response) => {
   const status = {
      "Status": "Running"
   };
   response.send(status);
});