import express from 'express'
import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'

export const saveUser = async (req,res,next) => {
    User.create(req.body)
    .then( createdUser => {
        const token = assignToken(createdUser.id)

        res.send({
            message: 'user created',
            token: token,
            details: createdUser
        })
    })
}

export const assignToken = async (id) => {
    return jwt.sign({id}, 'secrete_key_goes_here', 7000)
}