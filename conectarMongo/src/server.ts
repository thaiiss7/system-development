import express, { response } from 'express'
import routes from './routes/routes.ts'
import connectDB from './database/database.ts'

const port = 8080
const app = express()

connectDB()
routes(app)

app.get('/', (req, res) => {
    res.status(200).send({response: "Api funcionando"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})