var fs = require('fs');
var XLSX = require('xlsx');
var nodemailer = require('nodemailer');
const express = require('express')
const next = require('next')
var https = require('https')
const cors = require('cors')   
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var pg =  require('pg');
// pg.defaults.ssl = false;
var connectionString = "pg://postgres:Verizon59!@afro-listings-master.cfrpea2gfrpi.us-west-1.rds.amazonaws.com:5432";
const client = new pg.Client(connectionString)

client.connect(function (err) {
  if (err) console.log(err, " ...Error connecting to PSQL");
  console.log("Connected... to... "); //'/notifications'
});

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  req.method === "OPTIONS" ? res.sendStatus(200) : next();
}

app.prepare()
.then(() => {
  const server = express()
  server.use(cors());
  server.use(express.json()); 
  server.use(allowCrossDomain);

  // Must be nextjs page...
  server.get('*', (req, res) => {
    return handle(req, res)
  })
 
  server.listen(9000, (err) => {
    if (err) throw err
    console.log(' Ready on... ' , this, server.settings.env)
  })

  server.post('/saveForm', (req, res) => {
    const { email, username, password, picture } = req.headers;
    client.query("INSERT INTO users(username, type, email, pw, picture) VALUES ($1,$2,$3,$4,$5) RETURNING ID", 
      [username, 'standard', email, password, picture], (e, resp) => { // Encrypt password later... 
      if (e) console.log(e, " Error insterting new user");
      res.end(JSON.stringify(r.rows && r.rows.length 
        ? r.rows[0]
        : {}
      ))
    })
  })

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})