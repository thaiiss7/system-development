import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.status(200).send({response: "Api funcionando"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})