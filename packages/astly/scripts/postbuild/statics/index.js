'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./main.umd.production.js');
} else {
  module.exports = require('./main.umd.development.js');
}
