"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _traveller = require("../controllers/traveller.controller");
var _verifyLogin = _interopRequireDefault(require("../middlewares/verifyLogin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = (0, _express["default"])();
routes.get('/tickets', _traveller.getTickets);
routes.get('/filter', _traveller.filterTickets);
routes.post('/book', _verifyLogin["default"], _traveller.bookTicket);
routes.get('/history', _verifyLogin["default"], _traveller.getBookedTickets);
var travellerRoutes = routes;
var _default = travellerRoutes;
exports["default"] = _default;