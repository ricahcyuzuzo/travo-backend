import Hapi from '@hapi/joi';

export const validateTicket = (ticket) => {
    const schema = Hapi.object().keys({
        price: Hapi.string().required(),
        from: Hapi.string().required(),
        destination: Hapi.string().required(),
        time: Hapi.string().required(),
        vehicle: Hapi.string().required(),
        arrival: Hapi.string().required(),
    })

    return schema.validate(ticket);
}
