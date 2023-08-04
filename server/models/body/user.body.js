export const createBodyUser = (req) => {
    const user = {
        name: req.body.name,
        phone: req.body.phone,
        pin: req.body.pin,
    }

    return user;
}

export const loginBodyUser = (req) => {
    const user = {
        phone: req.body.phone,
        pin: req.body.pin,
    }

    return user;
}


