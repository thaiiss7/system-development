import express from 'express';

const app = express();
const port = 8080;

// app.use(cors({
//     origin: '*'
// }))

// connectDB()

// routes(app)

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

app.get('/', (req, res) => {
    res.status(200).send({response: "Api funcionando"})
})