"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  name: String,
  phone: String,
  pin: String,
  type: String,
  createdAt: {
    type: String,
    "default": new Date()
  }
});
var usersModel = _mongoose["default"].model('users', userSchema);
var _default = usersModel;
exports["default"] = _default;