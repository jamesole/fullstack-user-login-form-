const express = require('express');
const { connect } = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect');
const userRouter = require('./routes/userRoutes');
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);


app.get('/', (req, res) => {
    res.json({msg: 'howdy'})
})

const start = async() => {
    try {
        await connectDB(process.env.URL);
        app.listen(8000, () => {console.log('DB + Server 8k up')})
    }

    catch(error) {
        console.log(error);
    }
}

start();
