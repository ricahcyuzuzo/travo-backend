export const createBodyTicket = (req) => {
    const user = {
        price: req.body.price,
        from: req.body.from,
        destination: req.body.destination,
        time: req.body.time,
        vehicle: req.body.vehicle,
        arrival: req.body.arrival,
    }

    return user;
}
