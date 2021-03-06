#!/usr/bin/env node

var path = require('path');
var adventure = require('workshopper-adventure/adventure');
var jsing = adventure({
    name: 'javascripting'
  , appDir: __dirname
  , languages: ['en', 'ja', 'ko', 'es', 'zh-cn']
});

var problems = require('./menu.json');

problems.forEach(function (problem) {
  var p = problem.toLowerCase().replace(/\s/g, '-');
  var dir = path.join(__dirname, 'problems', p);
  jsing.add(problem, function () { return require(dir); });
});

jsing.execute(process.argv.slice(2));
