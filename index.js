const express = require('express');
const server = express();

const PORT = 5000;

server.get('/', (req,res)=>{
    return res.json({ hello: 'world' })
})

server.listen(PORT, () => console.log(`\nServer is running on https://localhost:${PORT}`))