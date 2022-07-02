import { VotedUser } from "../models/voted-users.js"
import { incrementVotes } from "./account.controller.js"


export const saveVotedUser = async (req,res,next) => {

    if(hasuservoted(req.body.votedUser, req.body.candidate)) {
        return res.send({
            message: 'You have voted this candidate already.'
        })
    }
   
    await VotedUser.create(req.body)
    .then(response => {
        incrementVotes(req.body.candidate)
        res.send({
            message: 'voting is successfully done',
            data: response
        })
    })
}

export const hasuservoted = (userId,candidateId) => {

    const votedUserFound = VotedUser.find({ votedUser: userId, candidate: candidateId })
    if(Object.entries(votedUserFound).length !== 0 ) return true
    else return false
        
}