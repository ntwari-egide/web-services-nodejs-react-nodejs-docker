import express from 'express'
import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'

export const saveUser = async (req,res,next) => {
    const createdUser = await User.create(req.body)
    const token = assignToken(createdUser._id)

    res.send({
        message: 'user created',
        token: token,
        details: createdUser
    })
    
}

export const assignToken = (id) => {
    return jwt.sign({id}, 'secrete_key_goes_here', {expiresIn: 7000})
}


export const protectedMe =  async (req,res,next) => {
    let token;

    if(req.headers.authorization) {
        token = req.headers.authorization.split(' ')[1]
    }

    console.log('Ive read this token: ', token)

    const decode = jwt.verify(token, 'secrete_key_goes_here')
    
    const userFound = await User.findById(decode.id);

    if(! userFound) res.send({ message: 'Unauthorized', details: 'Login first'})

    next()
}