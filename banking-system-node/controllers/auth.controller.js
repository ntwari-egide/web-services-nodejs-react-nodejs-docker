import express from 'express'
import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const getAllUsers = async (req,res) => {
    await User.find()
    .then( users => {
        res.send({
            message: 'all users',
            details: users
        })
    })
}

export const saveUser = async (req,res,next) => {
    const createdUser = await User.create(req.body)
    const token = assignToken(createdUser._id)

    res.send({
        message: 'user created',
        token: token,
        details: createdUser
    })
    
}

export const login = async (req,res, next) => {
    const userFound = await User.find({ username: req.body.username})

    console.log('user :', userFound);

    if(Object.entries(userFound).length !== 0) {
        if(checkCorrectPassword(req.body.password,userFound.password)) {
            const token = await assignToken(userFound._id)

            return res.send({
                message: 'Logged in successfully',
                token: token
            })
        }
    }

    return res.send({
        message: 'Login failed',
        details: "User name or password is incorrect"
    })
}

const checkCorrectPassword = async (password,encryptedPass) => {
    return await bcrypt.compare(password, encryptedPass)
}

export const assignToken = id => {
    // return jwt.sign({id}, 'secrete_key_goes_here', {expiresIn: 7000})

    return jwt.sign({id},
        'secrete_key_goes_here',{
        expiresIn : 80000})
}


export const protectedMe =  async (req,res,next) => {
    let token;

    if(req.headers.authorization) {
        token = req.headers.authorization.split(' ')[1]
    }
    else {
        return res.send({ message: 'Unauthorized', details: 'No token headers is present'}).status(401)
    }
    console.log('Ive read this token: ', token)

    const decode = jwt.verify(token, 'secrete_key_goes_here')

    console.log('decoded: ', decode)
    
    const userFound = await User.findById(decode.id);
    
    // if(! userFound) res.send({ message: 'Unauthorized', details: 'Login first'})

    next()
}