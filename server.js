require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));


app.get('/', (res, req)=>{
    console.log('get--res', res)
    res.send('Default Route')
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});