// import packages
const express = require('express')
const dotEnv=require('dotenv')
const mongoose=require('mongoose')
dotEnv.config()
const port=process.env.PORT || 8000
const DB=process.env.DB_CONNECTION

const app = express()

//Database connection
mongoose.connect(DB,{useUnifiedTopology:true,useNewUrlParser:true})
        .then(()=>console.log(`DB is connected and server running on port ${port}`))
        .catch(err=>console.log(err))

// Middlwares
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port)
  
