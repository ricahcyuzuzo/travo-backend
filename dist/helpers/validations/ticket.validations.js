"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateTicket = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var validateTicket = function validateTicket(ticket) {
  var schema = _joi["default"].object().keys({
    price: _joi["default"].string().required(),
    from: _joi["default"].string().required(),
    destination: _joi["default"].string().required(),
    time: _joi["default"].string().required(),
    vehicle: _joi["default"].string().required(),
    arrival: _joi["default"].string().required()
  });
  return schema.validate(ticket);
};
exports.validateTicket = validateTicket;