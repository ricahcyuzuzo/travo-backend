"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var bookingsSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  ticket: Object,
  ticketId: String,
  user: Object,
  userId: String,
  createdAt: {
    type: String,
    "default": new Date()
  }
});
var Booking = _mongoose["default"].model('bookings', bookingsSchema);
var _default = Booking;
exports["default"] = _default;