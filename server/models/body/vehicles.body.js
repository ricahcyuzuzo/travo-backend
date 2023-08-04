export const addBodyVehicle = (req) => {
    const vehicle = {
        plateNo: req.body.plateNo,
        driverId: req.body.driverId,
    }

    return vehicle;
}
