import Mongoose from 'mongoose';
import { validateLogin, validateSignUp } from '../helpers/validations/auth.validations';
import { createBodyUser, loginBodyUser } from '../models/body/user.body';
import { comparePassword, generateToken, hashPassword } from '../helpers/authenticate';
import User from '../models/db/users.mode';

export const createUser = async (req, res) => {
    try {
        const { name, phone, pin} = req.body;
        const { type } = req.query;
        const { error } = validateSignUp(createBodyUser(req));

        if(error){
            return res.status(400).json({
                message: error.details[0].message.replace(/"/g, '')
            })
        }

        const results = await User.find({ phone });
        if(results.length > 0) {
            return res.status(409).json({
                message: 'Mobile phone number is already used, please try another',
            })
        }

        const hashedPassword = hashPassword(pin);
        const created = await User.create({
            _id: new Mongoose.Types.ObjectId(),
            name,
            phone,
            pin: hashedPassword,
            type: type === '1' ? 'traveller' : type === '2' ? 'angency' : 'driver',
        });

        return res.status(201).json({
            message: 'User Created successfully',
            token: generateToken(created),
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something went wrong",
            error
        })
    }
}

export const login = async (req, res) => {
    try {
        const { phone, pin } = req.body;
        const { error } = validateLogin(loginBodyUser(req));

        if(error){
            return res.status(400).json({
                message: error.details[0].message.replace(/"/g, '')
            })
        }

        const results = await User.findOne({ phone });

        if(!results){
            return res.status(401).json({
                message: 'Invalid phone number or password',
            });
        };

        if(results.status === 'deactivated'){
            return res.status(401).json({
                message: 'Your Account is Suspended, please contact the support team for help.',
            });
        }

        const isPasswordTrue = comparePassword(pin, results.pin);
        if(!isPasswordTrue){
            return res.status(401).json({
                message: 'Invalid phone or pin',
            });
        }

        return res.status(201).json({
            token: generateToken(results)
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            error
        })
    }
}
