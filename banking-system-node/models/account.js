import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    id: {
        type: Number,
        require: 'account is required!'
    },
    accountName: {
        type: String,
        require: 'account name is required'
    },
    balance: {
        type: String,
        require: 'balance is required'
    },
    loginId: {
        type: String,
        require: "login ID is required"
    }
})

export const Account = mongoose.model('accounts', accountSchema)