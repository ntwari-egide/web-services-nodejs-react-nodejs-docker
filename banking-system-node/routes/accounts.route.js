import express from 'express'
import { deleteAccount, getAccount, getAllAccounts, saveAccount, updateAccount } from '../controllers/account.controller.js';
import { protectedMe } from '../controllers/auth.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Accounts
 *  description: accounts apis are here
 */
router.route('/')

    /**
     * @swagger
     * path:
     * /api/v1/accounts:
     *  get:
     *      summary: Return all accounts
     *      description: return all candidates accounts
     *      tags: [Accounts]
     *      responses:
     *          200:
     *              description: return all candidate accounts
     *              content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          message:
     *                              type: String
     *                              example: changes
     *                          data:
     *                              type: array
     *                              items:
     *                                  type: object
     *                                  properties:
     *                                      id:
     *                                          type: string
     *                                          description: dadafs
     *                                          example: 242341341234
     */
    .get( protectedMe, getAllAccounts)

    /**
     * @swagger
     * path:
     * /api/v1/accounts:
     *  post:
     *      summary: save new account
     *      description: add new candidate
     *      tags: [Accounts]
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          candidateName:
     *                              type: string
     *                              description: candidate name
     *                              example: egide
     *                          partyName:
     *                              type: string
     *                              description: party name
     *                              example: democrates
     *                          profileUrl:
     *                              type: string
     *                              example:
     *                          votes:
     *                              type: number
     *                              description: candidate name
     *                              example: 0
     *                          postTitle:
     *                              type: string
     *                              example: "PRESIDENT OF STATE"
     *                          postDescription:
     *                              type: string
     *                              example: "president of state"
     *      responses:
     *          201:
     *              description: return all candidate accounts
     *              content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          message:
     *                              type: String
     *                              example: changes
     *                          data:
     *                              type: array
     *                              items:
     *                                  type: object
     *                                  properties:
     *                                      id:
     *                                          type: string
     *                                          description: dadafs
     *                                          example: 242341341234
     */
    .post(saveAccount)

router.route('/:id')
    .get(getAccount)
    .put(updateAccount)
    .delete(deleteAccount)

export default router