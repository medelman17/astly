"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./main.cjs.production.js");
} else {
  module.exports = require("./main.cjs.development.js");
}
