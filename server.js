require('dotenv').config();
const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

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

app.get('/:symbol', (req, res)=>{
    const symbol = req.params.symbol;
    const url =`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`;
    axios.get(url)
    .then((response)=>res.send(response.data))
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});