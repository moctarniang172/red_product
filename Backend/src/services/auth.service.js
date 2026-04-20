const User = require('../models/user.models');
const bycrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');


//inscription
exports.register = async (data)=>{
    const {nom,prenom,email,password} = data;

    if(!nom || !prenom || !email || !password){
        throw new Error("Remplir tous les champs !")
    }
  //verifier si l'email est deja exister
    const verifierexiste = await User.findOne({email})
    if(verifierexiste){
        throw new Error("l'email saisie est deja exister !");
    }
    const hashpassword = await bycrypt.hash(password,10);

    const user = await User.create({
        nom,
        prenom,
        email,
        password: hashpassword
        
    })
    return user;
} 

//connexion

exports.login = async (data)=>{
    const {email,password2} = data;

    if(!email || !password2){
        throw new Error("remplir les champs !")
    }

// verifier l'email de l'utilisateur
    const verifiemail = await User.findOne({email})
    if(!verifiemail){
        throw new Error("email n'existe pas")
    }

    //comparer le mot de passe avec le cryptage de la mot de passe saisie lors de l'inscription
    const verifier = await bycrypt.compare(password2, verifiemail.password)
    if(!verifier){
        throw new Error("mot de passe incorrect")
    }

    const token = await jsonwebtoken.sign({id: verifiemail.id},process.env.SECRET,{expiresIn: '7d'})

   return { user: verifiemail, token };
     
}


