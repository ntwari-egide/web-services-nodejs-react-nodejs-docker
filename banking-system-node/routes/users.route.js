import express from 'express'
import { getAllUsers, login, saveUser } from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/')
    .get(getAllUsers)

router.route('/signup')
    .post(saveUser)

router.route('/login')
    .post(login)


export default router