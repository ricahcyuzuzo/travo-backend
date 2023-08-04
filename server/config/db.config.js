import mongoose from 'mongoose';
import 'dotenv/config';

const mongoConnect = () => {
    mongoose.connect('mongodb+srv://sot:sot123@cluster0.auz6ebw.mongodb.net/?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    mongoose.connection
        .once('open', () => console.log('Database connected successful'))
        .on('error', (err) => console.log(err));
}

export default mongoConnect;
