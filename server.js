require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios")

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));


app.get('/', (req, res)=>{
    console.log('get--res', res)
    res.send('Default Route')
})

app.get('/:stock', (req, res)=>{
    const stock = req.params.stock;
    console.log('get--res', res);
    res.send(stock);
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});