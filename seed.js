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
    client.query(
    "CREATE TABLE users(id SERIAL PRIMARY KEY,\
        email varchar(100),\
        fn varchar(50),\
        ln varchar(50),\
        type varchar(50),\
        username varchar(100),\
        pw varchar(50),\
        creationdate varchar(100))", (err, resp) => {
          if (err) {
            console.log(err," Error ")
          } else {
            console.log(resp, " SUCCESS ");
          }
        });
});
