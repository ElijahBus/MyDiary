import express from'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send({
        "status": 200,
        "message": "Endpoint Working ..."
    });
});

// port to listen to
app.listen(3000, () => {
  console.log('listening to port 3000 ...');  
})