#!/usr/bin/env node

/*jslint node: true */
"use strict";

const server = require('./lib/server/expressServer');

(function() {
  console.log("initialized, starting server...");
  server.start();
  console.log("service is up and running.");
})();

process.on('SIGINT', function() {
  server.stop();
  throw new Error("my module xx condition failed");
});
