const User = require('../models/User');
const Role = require('../models/Role');
const infoUser = require('../models/infoUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');
const {secret} = require('./config');
function generateAccessToken(roles, username) {
    const payload = {
        roles, 
        username
    }

    return jwt.sign(payload, secret, {expiresIn: '24h'});
}

class authController {
    async registration(reg, res) {
        try {
            const errors = validationResult(reg);
            if (!errors.isEmpty()) {
                return res.status(400).json({error: true, message: 'Ошибка при регистрации', errors});
            }
            const {username, password, fio} = reg.body;
            const candidate = await User.findOne({username});

            if (candidate) {
                return res.status(400).json({error: true, message: 'Пользователь с таким именем уже существует'});
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: "USER"})
            const user = new User({username, password: hashPassword, roles: [userRole.value]});
            const userBio = new infoUser({username, fio});
            await userBio.save();
            await user.save();
            const token = generateAccessToken(userRole, username);
            return res.json({token});
        } catch (e) {
            console.log(e);
            res.status(400).json({error: true, message: 'Registration error'});
        }
    }

    async login(reg, res) {
        try {
            const {username, password} = reg.body;
            const user = await User.findOne({username});
            if (!user) {
                return res.status(400).json({error: true, message: `Пользователь ${username} не найден`});
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({error: true, message: `Введен неверный пароль`});
            }
            const token = generateAccessToken(user.roles, user.username);
            return res.json({token});
        } catch (e) {
            console.log(e);
            res.status(400).json({error: true, message: 'Login error'});
        }
    }

    async getUserInfo(reg, res) {
        try {
            const token = reg.headers.authorization.split(' ')[1];
            const decodedData = jwt.verify(token, secret);
            const userInf = await infoUser.findOne({username: decodedData.username});
            res.json(userInf);
        } catch (e) {
            
        }
    }

    async getUsers(reg, res) {
        try {
            const users = await User.find()
            res.json(users);
        } catch (e) {
            
        }
    }

    async changeTestsResult(reg, res) {
        try {
            const token = reg.headers.authorization.split(' ')[1];
            const decodedData = jwt.verify(token, secret);
            const {testNumber, result} = reg.body;
            switch (testNumber){
                case 1:
                    await infoUser.findOneAndUpdate({username: decodedData.username}, {'test1': result}, { new: true } );
                    break;
                case 2:
                    await infoUser.findOneAndUpdate({username: decodedData.username}, {'test2': result}, { new: true } );
                    break;
                case 3:
                    await infoUser.findOneAndUpdate({username: decodedData.username}, {'test3': result}, { new: true } );
                    break;
            }
            const userInf = await infoUser.findOne({username: decodedData.username});
            res.json(userInf);
        } catch (e) {

        }
    }
}
module.exports = new authController();