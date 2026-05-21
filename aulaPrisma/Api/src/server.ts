import express from 'express';
import connectDB from './database/database.ts';
import routes from './routes/routes.ts';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors({
    origin: '*'
}))

connectDB()

routes(app)

app.get('/', (req, res) => {
    res.status(200).send({response: "Api funcionando"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
