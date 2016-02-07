#!/usr/bin/env node
var Promise = require('bluebird');
var phantomas = Promise.promisifyAll(require('phantomas'));
var reference = require('./reference');

exports.getReference = function() {
  return reference;
};

exports.output = function(url) {
  return new Promise(
    function (resolve, reject) {
      resolve()
    })
    .then(function() {
      return phantomas(
          url,
          {timeout: 50}
        ).then(
          function() {
            return {
              'url': url,
              'plugin': reference.plugin,
              'sensors': arguments[0].json.metrics
            };
          },
          function() {
            return {
              'url': url,
              'plugin': reference.plugin,
              'sensors': {}
            };
          }
        );
    });
};
