#!/usr/bin/env node

/*jslint node: true */
"use strict";

const express = require('express');
const config = require('config');
const path = require('path');

const app = express();

const PORT = config.get('SERVER.PORT');
const PUBLIC_PATH = config.get('SERVER.PUBLIC_DIR');


console.log('PUBLIC_PATH: ',PUBLIC_PATH);
const buildDir = path.normalize(path.join(__dirname, PUBLIC_PATH));
let server;

const start = async (req, res) => {
  appMiddleWare();
  // Start the server
  server = app.listen(PORT, function() {
    console.log("Server is live at Port: ", PORT);
  });
};

const stop = async (req, res) => {
  // TODO
  server.close();
};

const appMiddleWare = () => {
  app.disable('x-powered-by');

  app.use(express.static(buildDir));

  app.use((error, req, res, next) => {
    res.header("X-powered-by", 'ME');
    res.header("Server", 'X');
      next();
  });


  app.get('/', function(req, res) {
    res.sendFile(path.join(buildDir, 'index.html'));
  });
};


module.exports = {
  start,
  stop
};
