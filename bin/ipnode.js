#!/usr/bin/env node

const argv = require("yargs").argv;
const ipnode = require("../index");

ipnode(
  argv.ip ? true : false,
  argv.mac ? true : false,
  argv.net ? true : false,
  argv.commands ? true : false
);
