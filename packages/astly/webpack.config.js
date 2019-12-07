const native = require('./scripts/webpack/webpack.native');
const web = require('./scripts/webpack/webpack.web');

module.exports = [native, web];
