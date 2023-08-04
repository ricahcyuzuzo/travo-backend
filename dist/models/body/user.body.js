"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginBodyUser = exports.createBodyUser = void 0;
var createBodyUser = function createBodyUser(req) {
  var user = {
    name: req.body.name,
    phone: req.body.phone,
    pin: req.body.pin
  };
  return user;
};
exports.createBodyUser = createBodyUser;
var loginBodyUser = function loginBodyUser(req) {
  var user = {
    phone: req.body.phone,
    pin: req.body.pin
  };
  return user;
};
exports.loginBodyUser = loginBodyUser;