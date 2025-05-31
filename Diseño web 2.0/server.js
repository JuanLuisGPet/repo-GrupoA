const express = require('express');
const app = express();
const cors = port=3000;
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello mundo, soy Juan Luis!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando at${port}`);
});

app.get('/archivo/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/archivo', (req, res) => {
    const datos = req.body;
    console.log(datos);
    res.send('Datos recibidos correctamente!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando at ${port}`);
});

