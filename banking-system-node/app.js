import express from 'express'
import AccountsRouter from './routes/accounts.route.js'
import UsersRouter from './routes/users.route.js'
import VotedUserRouter from './routes/voted-user.route.js'
import cors from 'cors'
import './server.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()

const PORT = process.env.PORT || 3000

//middlewares
app.use(cors())
app.use(express.json({ limit: '20kb'}))



const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Voting APIs implementation documentation',
      version: '1.0.0',
      description:
        'Voting app description goes here',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'innoways',
        url: 'https://jsonplaceholder.typicode.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          in: 'header',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  };
  
  const options = {
    swaggerDefinition,
      apis: ['./routes/*.js']
  ,
  };
  
  const swaggerSpec = swaggerJSDoc(options);

//  all routing to the routes folder
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/api/v1/accounts', AccountsRouter)
app.use('/api/v1/users', UsersRouter)
app.use('/api/v1/voting', VotedUserRouter )

app.listen(PORT, () => {
    console.log('The app is running on port ' + PORT+' ...')
})


export default app