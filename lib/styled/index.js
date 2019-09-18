if (process.env.IS_NATIVE === "TRUE") {
  module.exports = require("./index.native");
} else {
  module.exports = require("./index.web");
}
