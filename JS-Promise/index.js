const express = require('express');
const app = express();

const func = require('./functions');

app.get('/', async (req, res) => {
        const result = await func();
        res.json(result);
        }
    )

app.listen(3000, () => console.log('Iniciando servidor.'));