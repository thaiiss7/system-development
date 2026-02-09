import express, { response } from 'express'
import routes from './routes/routes.ts'

const port = 8080
const app = express()

routes(app)

app.get('/', (req, res) => {
    res.status(200).send({response: "Api funcionando"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

// const pessoas = [
//     {
//         nome: "beca"
//     },
//     {
//         nome: "helozinha"
//     }
// ]

// const pessoa = {
//     name: "helo",
//     lastname: "fazchinelo"
// }

// app.get('/objeto', (req, res) => {
//     // res.send({pessoas: pessoas})
//     res.status(200).send({pessoas})
// })

// app.get('/direto', (req, res) => {
//     res.send({ pessoa })
// })

// app.get('/', (req, res) => {
//     res.send({response: "Api funcionando"})
// })