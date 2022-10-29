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
pg.defaults.ssl = false;
var connectionString = "postgres://pmoore:Passw0rd@localhost:5432/harvest";
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
  // server.set('port', (4010));
    
  // serverTwo = https.createServer(
  // {
  //   key: fs.readFileSync('/../../../../etc/apache2/ssl/private/jgf_wildcard_2022_decrypted.key', 'utf8'),
  //   cert: fs.readFileSync('/../../../../etc/apache2/ssl/ccc21481a20e9754.pem', 'utf8'),
  // }, app);

  // Must be nextjs page...
  server.get('*', (req, res) => {
    return handle(req, res)
  })
 
  server.listen(9000, (err) => {
    if (err) throw err
    console.log(' Ready on... ' , this, server.settings.env)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})