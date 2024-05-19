const User = require('../models/User');
const jwt = require('jsonwebtoken');


const handleErrors =(err) =>{
    console.log(err.message,err.code);
    let errors =  {email: '',password: ''};

    //incorrect login email
    if(err.message === "Incorrect email"){
        errors.email = "that email is not registered!";
    }

    if(err.message === "Incorrect password"){
        errors.password = "that password is not registered!";
    }

    // duplicate emails
    if(err.code === 11000){
        errors.email = 'That email is already registered!';
        return errors;
    }
    if(err.message.includes('user validation failed')){
       Object.values(err.errors).forEach(({properties}) =>{
        errors[properties.path] = properties.message;
       })
    }
    return errors;
}

const maxAge = 1*60*1000; // in seconds
const createToken = (id, name)=>{
    return jwt.sign({id,name}, 'sgvvdjhvsdhjcdvdkcdwkdbidsjkbddjkcbwlkdbnjcd',{
        expiresIn: maxAge
    });
}

module.exports.signup_post = async (req,res)=>{

    const {firstName,lastName,email, password} = req.body;
    try{
      const user = await User.create({firstName, lastName, email,password});
      const newUser = {
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
      const token = createToken(user._id, user.email);
      res.cookie('jwt', token,{httpOnly: true, maxAge: maxAge*1000});
      res.status(201).json({newUser});
    }catch(err){
       const errors = handleErrors(err);
        res.status(400).json({errors});
    }
    //res.send('New user sign up');
}
module.exports.login_post = async (req,res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.login(email, password);
        const token = createToken(user._id, user.email);
        res.cookie('jwt', token,{httpOnly: true, maxAge: maxAge*1000});
        res.status(200).json({user: user._id});
    }catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
    //res.send({email,password});
    // console.log(email,password);
    // res.send('user login');
}

module.exports.logout_get = (req, res) =>{
    res.cookie('jwt', '',{maxAge: 1});
    res.redirect('/');
}