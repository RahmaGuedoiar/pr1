const User = require('../modles/userSchema');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');
const { Admin } = require('mongodb');

const Registre = async (req, res) => {

    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {

            res.status(400).json({ msg: errors.array() })
        } else {
            const { name, age, email, password } = req.body
            const existeUser = await User.findOne({ email: email })


            if (existeUser) {
                res.status(400).json({ msg: "User already existe plz login " })
            } else {

                
                const newUser = await User.create({ name, age, email, password, role:'user' }); // Or 'user' for regular users
                console.log(newUser)
                const token = await jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWTTOKEN, { expiresIn: "7d" });
                res.status(201).json({ msg: "Resister Done!", token })
                // const isFirstAccount = (await User.countDocuments({})) === 0;

                // const role = isFirstAccount ? 'admin' : 'user';
            }
        }
    }
    catch (error) {
        res.status(500).json({ msg: "somthing is wrong" })
        console.log(error)
    }
}
const Login = async (req, res) => {

    try {

        const { email, password } = req.body
        const existeUser = await User.findOne({ email: email })

        if (!existeUser) {
            res.status(400).json({ msg: "Make sur to register first ! " })
        } else {
            
            const token = await jwt.sign({ id: existeUser._id, role: existeUser.role }, process.env.JWTTOKEN, { expiresIn: "7d" });

            res.status(201).json({ msg: "login done ! ", token })

    }
    } catch (error) {
    res.status(500).json({ msg: "somthing is wrong " })
    console.log(error)
}

}
const LoginAdmin = async (req, res) => {

    try {

        const { email, password } = req.body
        const existeUser = await User.findOne({ email: email })

        if (!existeUser) {
            res.status(400).json({ msg: "Make sur to register first ! " })
        } else {
             if(existeUser="admin"){
            const token = await jwt.sign({ id: existeUser._id, role: existeUser.role }, process.env.JWTTOKEN, { expiresIn: "7d" });
            res.status(201).json({ msg: "login done ! ", token })
        }
        else{res.status(400).json({ msg: "you are not autorisited  " })}  

    }
    } catch (error) {
    res.status(500).json({ msg: "somthing is wrong " })
    console.log(error)
}

}
module.exports = { Registre, Login,LoginAdmin }

