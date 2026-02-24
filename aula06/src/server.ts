import express from 'express'
import routes from './routes/routes.js'

const app = express()
const port = 8080

routes(app)

app.get('/', (req, res) => {
    res.status(200).send({response: "Api funcionando"})
})

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`))