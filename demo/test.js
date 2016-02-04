var Promise = require('bluebird');
var engine = Promise.promisifyAll(require('../index'));

engine
  .output('http://fellipe.com')
  .then(function(result) {
    console.log(result);
  });
