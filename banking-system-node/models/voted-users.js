import mongoose from "mongoose";

const votedUserSchema = mongoose.Schema({
    id: {
        type: String
    },
    votedUser: {
        type: String
    },
    candidate: {
        type: String
    }
})

export const VotedUser = mongoose.model("voted_users", votedUserSchema)
