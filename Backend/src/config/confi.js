const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const connectDB = async ()=>{
    try{
      const conn =  await mongoose.connect(process.env.URL_MONGOOSE)
      if(conn){
        console.log("connexion reussi !!!")
      }


    }catch(error){
        console.log({message: error.message})

    }
}

module.exports = connectDB;