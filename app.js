const express = require('express');

const {fileServices} = require("./services");
const userRouter = require('./router/user.router');
const carRouter = require('./router/car.router');
require('dotenv').config();
const configs = require('./config/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/users', userRouter);

app.use('/cars', carRouter);




app.get('/', (req, res) => {
    res.json('Welcome');
})

app.use((err, req, res, next) => {

    res.status(err.status || 500).json(err.message);
})

app.listen(configs.PORT, () => {
    console.log(`Server listen ${configs.PORT} !`);
})