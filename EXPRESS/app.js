const express = require('express'),
bodyParser = require('body-parser'),
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 8888;

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        url:"https://swift-chefs-cry.loca.lt/"
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);


// app.use(cors());
app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Swagger URL: localhost:8888/api
app.use(
  "/api",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true, // helps for stored procedures
  port: process.env.DB_PORT,
});
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/ping", (request, response) => {
   const status = {
      "Status": "Running"
   };
   response.send(status);
});

app.get("/table/:name", (request, response) => {
  const status = {
     "Status": "Running"
  };
  const sql = "select * from "+ request.params.name;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err);
      response.status(500).json({ error: 'Internal server error' });
    } else {
      response.json(results);
    }
  });
});

app.post("/query", (request, response) => {
  const body = request.body;
  // response.json(body);
  const sql = body.sql;
  // response.json(body.sql);
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err);
      response.status(500).json({ error: 'Internal server error' });
    } else {

      response.status(200).json({
        rows: results
        //rows: JSON.parse(JSON.stringify(results))
     });
           // response.json(results);
      // response.send(results);
      
    }
  });
});

app.post("/procedure", (request, response) => {
  const body = request.body;
  // response.json(body);
  const sql = body.sql;
  //  response.json(body.sql);
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err);
      response.status(500).json({ error: 'Internal server error', err });
    } else {

      response.status(200).json({
        rows: results[1][0].status
        //rows: JSON.parse(JSON.stringify(results))
     });
    }
  });
});