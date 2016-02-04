#!/usr/bin/env node
var Promise = require('bluebird');
var phantomas = Promise.promisifyAll(require('phantomas'));

exports.output = function(url) {
  return new Promise(
    function (resolve, reject) {
      resolve()
    })
    .then(function() {
      return phantomas(
          url,
          {timeout: 30}
        ).then(
          function() {
            return arguments[0].json.metrics;
          },
          function() {
            return arguments;
          }
        );
    });
};
