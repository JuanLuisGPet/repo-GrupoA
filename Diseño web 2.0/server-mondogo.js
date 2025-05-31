const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { MongoClient, ServerApiVersion } = require('mongodb');


app.get('/', (req, res) => {
    res.send('Hello mundo, soy Juan Luis!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando at ${port}`);
}
);
// MongoDB connection