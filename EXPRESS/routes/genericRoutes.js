const express = require('express');
const router = express.Router();

const db = require('../mysql_db');

router.post("/query", (request, response) => {
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




  router.get("/table/:name", (request, response) => {
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
  
  
  
  router.post("/procedure", (request, response) => {
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


module.exports = router;