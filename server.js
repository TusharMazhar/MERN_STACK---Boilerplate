const express = require('express')
const dotEnv=require('dotenv')
dotEnv.config()
const port=process.env.PORT || 8000

const app = express()



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})