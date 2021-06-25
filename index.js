const express = require('express');
const shortid = require('shortid')

const server = express();
server.use(express.json())

const PORT = 5000;

const channels = [];
const lessons = [];

server.get('/', (req, res) => {
   return res.json({ hello: 'world' })
})

server.get('/hello', (req, res) => {
   res.json({ hello: "future senior software developer" })
})

server.post('/api/channels', (req, res) => {
   const channelInfo = req.body;
   channelInfo.id = shortid.generate()
   channels.push(channelInfo)
   return res.status(201).json(channelInfo)
})

server.listen(PORT, () => console.log(`\nServer is running on https://localhost:${PORT}`))