import { Account } from "../models/account.js";

let accounts = [
    {
        id: 1,
        accountName: "324124124",
        bankName: "BK",
        balance: 5000,
        loginId: "ntwari"
    },
    {
        id: 2,
        accountName: "324124124",
        bankName: "BK",
        balance: 5000,
        loginId: "ntwari"
    },
    {
        id: 3,
        accountName: "324124124",
        bankName: "BK",
        balance: 5000,
        loginId: "ntwari"
    },
    {
        id: 4,
        accountName: "324124124",
        bankName: "BK",
        balance: 5000,
        loginId: "ntwari"
    }
]

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

export const updateAccount = (req,res) => {
    accounts = accounts.map(acc => 
        acc.id == req.params.id ? 
        { ...acc, accountName: req.body.accountName, bankName: req.body.bankName, loginId: req.body.loginId, balance: req.body.balance }   : acc
    )

    return res.send({
        message: 'updated accounts ....',
        data: accounts
    })
}

export const deleteAccount = (req,res) => {
    
}