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

export const getAllAccounts = (req,res) => {
    return res.send({
        data: accounts
    });
}

export const getAccount = (req,res) => {
    const account = accounts.find( account => account.id == req.params.id)

    return res.send({
        data: account
    })
}

export const saveAccount = (req,res) => {

    accounts.push(req.body);

    return res.send("Data stored")
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