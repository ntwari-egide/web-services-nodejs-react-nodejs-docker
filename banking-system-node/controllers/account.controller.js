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
        message: 'account created!'
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

export const deleteAccount = async (req,res) => {
    await Account.findByIdAndRemove(req.params.id)
    .then(response => {
        return res.send({
            message: 'Deleted account',
            data: response
        })
    })
}