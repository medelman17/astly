"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("dist/main.commonjs2.production.js");
} else {
  module.exports = require("./dist/main.commonjs2.development.js");
}
