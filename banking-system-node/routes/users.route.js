import express from 'express'
import { getAllUsers, login, saveUser } from '../controllers/auth.controller.js'

const router = express.Router()

/**
 * @swagger
 * tags: 
 *  name: Users
 *  description: users apis are here
 */

router.route('/')
    /**
     * @swagger
     * path:
     * /api/v1/users:
     *  get:
     *      summary: get all users
     *      description: get all users
     *      tags: [Users]
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
    .get(getAllUsers)

router.route('/signup')
    /**
     * @swagger
     * path:
     * /api/v1/users/signup:
     *  post:
     *      summary: signup
     *      description: add new user
     *      tags: [Users]
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          fullName:
     *                              type: string
     *                              description: full name
     *                              example: egide ntwari
     *                          username:
     *                              type: string
     *                              description: username
     *                              example: egide
     *                          password:
     *                              type: string
     *                              example: egide@123
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
    .post(saveUser)

router.route('/login')
    /**
     * @swagger
     * path:
     * /api/v1/users/login:
     *  post:
     *      summary: login
     *      description: sign in user
     *      tags: [Users]
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          username:
     *                              type: string
     *                              description: username
     *                              example: egide
     *                          password:
     *                              type: string
     *                              example: egide@123
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
    .post(login)


export default router