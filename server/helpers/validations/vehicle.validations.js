import Hapi from '@hapi/joi';

export const validateVehicle = (vehicle) => {
    const schema = Hapi.object().keys({
        plateNo: Hapi.string().required(),
        driverId: Hapi.string().required(),
    })

    return schema.validate(vehicle);
}
