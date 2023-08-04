"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBodyVehicle = void 0;
var addBodyVehicle = function addBodyVehicle(req) {
  var vehicle = {
    plateNo: req.body.plateNo,
    driverId: req.body.driverId
  };
  return vehicle;
};
exports.addBodyVehicle = addBodyVehicle;