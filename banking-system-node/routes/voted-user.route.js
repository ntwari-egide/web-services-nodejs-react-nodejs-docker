import express from 'express'
import { saveVotedUser } from '../controllers/voted-user.controller.js';

const router = express.Router()

router.route('/')
    .post(saveVotedUser)


export default router;