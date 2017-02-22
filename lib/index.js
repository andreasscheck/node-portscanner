"use strict";

var parseLines = require('./util').parseLines;
var spawn = require('child_process').spawn;
var spawnSync = require('child_process').spawnSync;

module.exports = class Telnet {
  constructor() {
  }

  test(host, port) {
    var cmd = 'telnet',
      args = [host, port],
      lines,
      key;
    var proc = spawnSync(cmd, args);
    if (proc.error) {
      return false;
    } else {
      lines = parseLines(proc.stdout);
      for (key in lines) {
        if (lines[key].indexOf('Connected to') !== -1) {
          return true;
        }
      }
      return false;
    }
  }
}
