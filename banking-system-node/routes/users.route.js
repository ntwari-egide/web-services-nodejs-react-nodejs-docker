import express from 'express'
import { saveUser } from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/signup')
    .post(saveUser)


export default router