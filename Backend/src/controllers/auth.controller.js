const connecter = require('../models/user.models');
const jwb = require('jsonwebtoken');
const bycrypt = require('bcrypt');
const service = require('../services/auth.service')


exports.register = async (req,rep)=>{
try{
    const registeruser = await service.register(req.body);
        
    
    rep.status(201).json({message: 'compte creer avec succes', registeruser});

}catch(error){
    rep.status(400).json({message:error.message})
   

}    
};

exports.login = async (req, rep)=>{
    try{
        const connexion = await service.login(req.body)

    res.json({
      message: 'Login successful',
      ...data,
    });
 

    }catch(error){
        rep.status(400).json({message: error.message})

    }
}