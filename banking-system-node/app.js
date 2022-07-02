import express from 'express'
import AccountsRouter from './routes/accounts.route.js'

const app = express()

const PORT = process.env.PORT || 3000

//  all routing to the routes folder
app.use('/api/v1/accounts', AccountsRouter)

app.listen(PORT, () => {
    console.log('The app is running on port ' + PORT+' ...')
})

export default app