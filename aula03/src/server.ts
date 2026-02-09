import express, { response } from 'express'

const port = 8080
const app = express()

const pessoas = [
    {
        nome: "beca"
    },
    {
        nome: "helozinha"
    }
]

const pessoa = {
    name: "helo",
    lastname: "fazchinelo"
}

app.get('/objeto', (req, res) => {
    // res.send({pessoas: pessoas})
    res.status(200).send({pessoas})
})

// app.get('/direto', (req, res) => {
//     res.send({ pessoa })
// })

app.get('/', (req, res) => {
    res.send({response: "Api funcionando"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})