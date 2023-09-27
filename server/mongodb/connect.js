import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true); // search fnality

    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));
}

export default connectDB;