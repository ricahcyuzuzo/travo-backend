"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
require("dotenv/config");
var _db = _interopRequireDefault(require("./config/db.config"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _agency = _interopRequireDefault(require("./routes/agency.routes"));
var _traveller = _interopRequireDefault(require("./routes/traveller.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());
app.use('/api', _auth["default"]);
app.use('/api', _agency["default"]);
app.use('/api', _traveller["default"]);
app.get("/", function (req, res) {
  res.status(200).json({
    message: "Welcome to Travo API."
  });
});
app.use(function (req, res) {
  res.type('json').status(404).json({
    message: '404 Endpoint not found',
    status: 404
  });
});
var port = process.env.PORT || 2000;
app.listen(port, function () {
  return console.log("Server is running on port ".concat(process.env.PORT, "."));
});
(0, _db["default"])();