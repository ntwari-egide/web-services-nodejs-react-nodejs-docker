import express from 'express'
import AccountsRouter from './routes/accounts.route.js'
import UsersRouter from './routes/users.route.js'
import VotedUserRouter from './routes/voted-user.route.js'
import cors from 'cors'
import './server.js'

const app = express()

const PORT = process.env.PORT || 3000

//middlewares
app.use(cors())
app.use(express.json({ limit: '20kb'}))

//  all routing to the routes folder
app.use('/api/v1/accounts', AccountsRouter)
app.use('/api/v1/users', UsersRouter)
app.use('/api/v1/voting', VotedUserRouter )

app.listen(PORT, () => {
    console.log('The app is running on port ' + PORT+' ...')
})


export default app