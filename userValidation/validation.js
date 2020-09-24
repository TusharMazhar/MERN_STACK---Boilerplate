const Joi=require('@hapi/joi');

const registerValidation=(data)=>{

    const schema={
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        phone:Joi.string().min(11).required(),
        address:Joi.string().min(6).required(),
        password:Joi.string().min(6).required()
    }
    

    return Joi.validate(data,schema)

}
const loginValidation=(data)=>{

    const schema={
        
        phone:Joi.string().min(11).required(),
        password:Joi.string().min(6).required(),
    }
    

    return Joi.validate(data,schema)

}

module.exports={registerValidation,loginValidation};

