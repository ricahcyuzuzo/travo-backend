"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = require("../controllers/auth.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = (0, _express["default"])();
routes.post('/signup', _auth.createUser);
routes.post('/login', _auth.login);
var authRoutes = routes;
var _default = authRoutes;
exports["default"] = _default;