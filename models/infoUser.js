const {Schema, model} = require('mongoose');


const infoUser = new Schema({
    username: {type: String},
    fio: {type: String},
    test1: {type: Number},
    test2: {type: Number},
    test3: {type: Number},
});

module.exports = model('infoUser', infoUser);