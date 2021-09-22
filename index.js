const express = require('express');
const app = express();
const Api = require('./Router/Api')
const PORT = 3000;

app.use('/api',Api)

app.get('/', (req, res)=>{
    res.send("<h1>Sejam bem-vindos ao Code Burge Club</h1>")
})


app.listen(PORT, ()=>console.log("Server runding in", PORT))