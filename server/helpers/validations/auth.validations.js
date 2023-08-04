import Hapi from '@hapi/joi';

export const validateSignUp = (user) => {
    const schema = Hapi.object().keys({
        name: Hapi.string().min(2).required(),
        phone: Hapi.string().min(10).max(10).required(),
        pin: Hapi.string().min(4).max(4).required(),
    })

    return schema.validate(user);
}

export const validateLogin = (user) => {
    const schema = Hapi.object().keys({
        phone: Hapi.string().min(10).max(10).required(),
        pin: Hapi.string().min(4).max(4).required(),
    })

    return schema.validate(user);
}
