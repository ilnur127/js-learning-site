const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 5000;
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.oz5gm.mongodb.net/auth_roles?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();