"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./main.native.commonjs2.production.js");
} else {
  module.exports = require("./main.native.commonjs2.development.js");
}
