import express from 'express'
import { saveUser } from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/')
    .post(saveUser)


export default router