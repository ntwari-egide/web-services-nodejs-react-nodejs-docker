import mongoose from "mongoose";
import db from './config/db.config.js'

mongoose.connect(db.url , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    if(! error) console.log('connected to mongodb ....')
    else console.log('error in connection to db : ', error.message)
})