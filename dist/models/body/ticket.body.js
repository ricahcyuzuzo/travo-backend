"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBodyTicket = void 0;
var createBodyTicket = function createBodyTicket(req) {
  var user = {
    price: req.body.price,
    from: req.body.from,
    destination: req.body.destination,
    time: req.body.time,
    vehicle: req.body.vehicle,
    arrival: req.body.arrival
  };
  return user;
};
exports.createBodyTicket = createBodyTicket;