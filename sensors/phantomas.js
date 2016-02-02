#!/usr/bin/env node
var phantomas = require('phantomas');

exports.extract = function(url) {
  phantomas(
    url,
    {'analyze-css': false},
    function(err, json, results) {
      console.log(['phantomas results', err, json, results]);
    });
};
