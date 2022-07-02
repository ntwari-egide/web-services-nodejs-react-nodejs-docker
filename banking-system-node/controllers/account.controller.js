import { Account } from "../models/account.js";

export const getAllAccounts = async (req,res) => {
    await Account.find()
    .then(response => {
        res.send({
            data: response
        });
    })
}

export const getAccount = async (req,res) => {
    const account = await Account.findById(req.params.id)

    return res.send({
        data: account
    })
}

export const saveAccount = async (req,res) => {

    await Account.create(req.body);

    return res.send({
        message: 'candidates created!'
    }).status(201)
}

export const updateAccount = async (req,res) => {

    await Account.findByIdAndUpdate( {_id: req.params.id}, req.body, {new: true})
    .then( response => {
        return res.send({
            message: 'updated accounts ....',
            data: response
        })
    })
    
}

export const incrementVotes = async (accountId) => {
    const account = await Account.findById(accountId);

    const request = {
        candidateName : account.candidateName,
        partyName : account.partyName,
        profileUrl: account.profileUrl,
        votes: account.votes + 1,
        postTitle: account.postTitle,
        postDescription: account.postDescription
    }


    await Account.findByIdAndUpdate( {_id: accountId}, request, { new: true})
    
}

export const deleteAccount = async (req,res) => {
    await Account.findByIdAndRemove(req.params.id)
    .then(response => {
        return res.send({
            message: 'Deleted account',
            data: response
        })
    })
}