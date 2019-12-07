'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./main.native.umd.development.js');
} else {
  module.exports = require('./main.native.umd.development.js');
}
