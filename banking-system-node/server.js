import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/banking-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    if(! error) console.log('connected to mongodb ....')
    else console.log('error in connection to db : ', error.message)
})