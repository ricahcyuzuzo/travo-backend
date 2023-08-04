"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateVehicle = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var validateVehicle = function validateVehicle(vehicle) {
  var schema = _joi["default"].object().keys({
    plateNo: _joi["default"].string().required(),
    driverId: _joi["default"].string().required()
  });
  return schema.validate(vehicle);
};
exports.validateVehicle = validateVehicle;