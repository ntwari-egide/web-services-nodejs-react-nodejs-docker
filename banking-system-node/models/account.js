import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    id: {
        type: String,
        require: 'account is required!'
    },
    candidateName: {
        type: String,
        require: 'candidate name is required'
    },
    partyName: {
        type: String,
        require: 'party name is required'
    },
    profileUrl: {
        type: String
    },  
    votes: {
        type: Number,
        default: 0,
        require: 'votes are required'
    },
    postTitle: {
        type: String,
        require: "Post type is required"
    },
    postDescription: {
        type: String,
        require: 'Post description is required'
    }
})

export const Account = mongoose.model('candates_accounts', accountSchema)