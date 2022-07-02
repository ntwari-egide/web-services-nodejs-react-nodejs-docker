import express from 'express'
import { saveVotedUser } from '../controllers/voted-user.controller.js';

const router = express.Router()

router.route('/')
    /**
     * @swagger
     * path:
     * /api/v1/users/voting:
     *  post:
     *      summary: voting
     *      description: request voting and voting
     *      tags: [Users]
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          votedUser:
     *                              type: string
     *                              example: 62c053178d9e133eb3c586b3
     *                          candidate:
     *                              type: string
     *                              example: 62c069d1b0dd0d930c3f1252
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
    .post(saveVotedUser)


export default router;