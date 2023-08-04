"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSignUp = exports.validateLogin = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var validateSignUp = function validateSignUp(user) {
  var schema = _joi["default"].object().keys({
    name: _joi["default"].string().min(2).required(),
    phone: _joi["default"].string().min(10).max(10).required(),
    pin: _joi["default"].string().min(4).max(4).required()
  });
  return schema.validate(user);
};
exports.validateSignUp = validateSignUp;
var validateLogin = function validateLogin(user) {
  var schema = _joi["default"].object().keys({
    phone: _joi["default"].string().min(10).max(10).required(),
    pin: _joi["default"].string().min(4).max(4).required()
  });
  return schema.validate(user);
};
exports.validateLogin = validateLogin;