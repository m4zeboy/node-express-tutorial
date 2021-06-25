const express = require('express');
const shortid = require('shortid')

const server = express();
server.use(express.json())

const PORT = 5000;

let channels = [];
let lessons = [];


server.get('/', (req, res) => {
   return res.json({ hello: 'world' })
})

server.get('/hello', (req, res) => {
   res.json({ hello: "future senior software developer" })
})

// #API CHANNELS =======================
//    POST _____________________________
server.post('/api/channels', (req, res) => {
   const channelInfo = req.body;
   channelInfo.id = shortid.generate()
   channels.push(channelInfo)
   return res.status(201).json(channelInfo)
})

//    GET _____________________________
server.get('/api/channels', (req,res) => {
   return res.status(200).json(channels)
})

//    DELETE __________________________
server.delete('/api/channels/:id', (req,res) => {
   const { id } = req.params;
   const deleted = channels.find(channel => channel.id === id)
   
   if (deleted) {
      channels = channels.filter(channel => channel.id !== id)
      return res.status(200).json(deleted)
   } else {
      return res.status(400).json({ message: 'Channel you are looking for does not exist.'})
   }
})

// #API LESSONS =====================
//    POST __________________________
server.post('/api/lessons', (req,res) => {
   const lessonInfo = req.body;
   lessonInfo.id = shortid.generate()
   lessons.push(lessonInfo)
   return res.status(201).json(lessonInfo)
})

//    GET __________________________
server.get('/api/lessons', (req,res) => {
   return res.status(200).json(lessons)
})

//    DELETE __________________________
server.delete('/api/lessons', (req,res) => {
   const { id } = req.params;
   const deleted = lessons.find(lesson => lesson.id === id)
   if(deleted) {
      lessons = lessons.filter(lesson => lesson.id !== id)
      return res.status(200).json(deleted)
   } else {
      return res.status(400).json({ message: 'Lesson you are looking for does not exist.'})
   }
})

server.listen(PORT, () => console.log(`\nServer is running on https://localhost:${PORT}`))