import express from 'express'
import { deleteAccount, getAccount, getAllAccounts, saveAccount, updateAccount } from '../controllers/account.controller.js';

const router = express.Router();

router.route('/')
    .get(getAllAccounts)
    .post(saveAccount)

router.route('/:id')
    .get(getAccount)
    .put(updateAccount)
    .delete(deleteAccount)

export default router