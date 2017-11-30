#!/usr/bin/env node

var parseRepo = require('./');

if (!process.argv[2]) {
  process.stderr.write('Error: URL must be provided as first argument\n');
  process.exit(1);
}
var res = parseRepo(process.argv[2]);
process.stdout.write(JSON.stringify(res, null, 2) + '\n');
