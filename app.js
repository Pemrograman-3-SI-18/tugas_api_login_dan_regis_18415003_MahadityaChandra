const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT  || 5050
const dbConfig = require('./Config/dbConfig' )
const cors = require('cors')

mongoose.connect(dbConfig.mongoURL,{
    useNewUrlParser: true
}).then(()=> console.log("connect mongodb"))
.catch(err => console.log(err))

app.use(cors())

app.use(bodyparser.json({
    extend: true,
    limit: '50mb'
}))
app.use(bodyparser.urlencoded({
    extend: true,
    limit: '50mb'
}))

app.use('/user' , require('./Routes/user'))
app.listen(port, function () {
    console.log('Server Berjalan di Port' + port )
})
