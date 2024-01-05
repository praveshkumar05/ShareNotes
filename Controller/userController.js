import User from '../Model/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerController =async (req, res)=>{
    try {
        const {name, email, password,phone} = req.body;

        const userFound = await User.find({email : email});
        
        if(userFound) return res.status(409).json({ error: 'User already exists' });
       
        const hashPassword = await bcrypt.hash(password, 10);
        const newUserData = new User({name: name, email: email, password : hashPassword, phone : phone});
        await newUserData.save();
        return res.status(200).json({user: userFound, message: "you are succesfully registered"});
        
    } catch (error) {
        return res.status(401).json("something went wrong during registraion");
    }
}
export const loginController = async (req, res)=>{
    try {
        const {email, password}  = req.body;

        const userFound = await User.find({email : email});
        if(!userFound) return res.status(409).json("user not found");

        const checkPassword = await bcrypt.compare(password, userFound.password);

        if(checkPassword)
        {
            const token =  jwt.sign({id : userFound._id},procee.env.JWT_SECRET_CODE, {expiresIn:'1d'});

            return res.status(200).jon({user: userFound, token: token, message: "you are logged In"});
        }
        else{
            return res.status(401).json("password does not match");
        }
        

    } catch (error) {
        res.status(401).json("something went wrong while logging in");
    }
}

