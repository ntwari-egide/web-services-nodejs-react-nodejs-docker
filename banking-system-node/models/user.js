import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({

    id: {
        type: String
    },
    fullName: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }

})


userSchema.pre('save', async (next) => {
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

export const User = mongoose.model('users',userSchema)