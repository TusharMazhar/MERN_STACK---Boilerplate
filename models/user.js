const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        min:6,
        max:255
      
    },
    email:{

        type:String,
        required:true,
        min:6,
        max:255,
        

    },
    phone:{
        type:Number,
        required:true,
        min:11
    },
    address:{
        type:String,
        required:true,
        max:255,
        
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:255
    },
   
    Date:{
        type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model('users',userSchema)