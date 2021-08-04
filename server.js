require('dotenv').config();


const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (res, req)=>{
    console.log("Default route")
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});