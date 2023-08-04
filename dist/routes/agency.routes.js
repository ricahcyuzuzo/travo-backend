"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _verifyLogin = _interopRequireDefault(require("../middlewares/verifyLogin"));
var _agency = require("../controllers/agency.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = (0, _express["default"])();
routes.post('/ticket', _verifyLogin["default"], _agency.createTicket);
routes.post('/vehicle', _verifyLogin["default"], _agency.addVehicle);
routes.get('/ourtickets', _verifyLogin["default"], _agency.getOurTickets);
routes.get('/vehicles', _verifyLogin["default"], _agency.getOurVehicles);
var agencyRoutes = routes;
var _default = agencyRoutes;
exports["default"] = _default;