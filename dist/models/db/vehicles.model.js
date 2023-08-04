"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var vehicleSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  plateNo: String,
  driverId: String,
  agencyId: String,
  createdAt: {
    type: String,
    "default": new Date()
  }
});
var Vehicle = _mongoose["default"].model('vehicles', vehicleSchema);
var _default = Vehicle;
exports["default"] = _default;