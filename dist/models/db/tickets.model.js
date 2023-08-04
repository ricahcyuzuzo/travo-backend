"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ticketSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  agency: String,
  agencyId: String,
  price: String,
  from: String,
  destination: String,
  vehicle: String,
  time: String,
  arrival: String,
  createdAt: {
    type: String,
    "default": new Date()
  }
});
var Ticket = _mongoose["default"].model('tickets', ticketSchema);
var _default = Ticket;
exports["default"] = _default;