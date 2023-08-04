"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
require("dotenv/config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mongoConnect = function mongoConnect() {
  _mongoose["default"].connect('mongodb+srv://sot:sot123@cluster0.auz6ebw.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  _mongoose["default"].connection.once('open', function () {
    return console.log('Database connected successful');
  }).on('error', function (err) {
    return console.log(err);
  });
};
var _default = mongoConnect;
exports["default"] = _default;