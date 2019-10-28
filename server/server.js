import express from'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    return res.status(200).send({
        "status": 200,
        "message": "Endpoint Working ..."
    });
});

export default app;
