const mongoose = require('mongoose');
const dotenv= require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));