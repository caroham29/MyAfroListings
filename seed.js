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
var connectionString = "postgres://pmoore:Passw0rd@localhost:5432/afrolistings";
const client = new pg.Client({
  user: 'postgres',
  host: 'afrolistings.cfrpea2gfrpi.us-west-1.rds.amazonaws.com',
  database: 'afrolistings',
  password: 'Verizon59!',
  port: 5432,
})

client.connect(function (err) {
  if (err) console.log(err, " ...Error connecting to PSQL");
    client.query(
    "CREATE TABLE users(id SERIAL PRIMARY KEY,\
        email varchar(100),\
        fn varchar(50),\
        ln varchar(50),\
        type varchar(50),\
        username varchar(100),\
        pw varchar(50),\
        creationdate varchar(100))");
});
