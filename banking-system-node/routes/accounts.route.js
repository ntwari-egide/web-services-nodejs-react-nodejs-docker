import express from 'express'

const router = express.Router();

router.route('/')
    .get((req,res,next) => {
        console.log('reached here: ', req)
    })

export default router