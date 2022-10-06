require('dotenv').config();
const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

// schema import
const Clients = require('./model/client');

// db connect 
const connectDB = require('./db/db.js');
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// settingup port
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'../public');

// static assets
app.use(express.static(publicDirectoryPath));

app.get('/allClients',async(req,res)=>{
    const allClients = await Clients.find({})
    console.log(allClients);
    res.json(allClients);
});

app.get('/allmessages/:userID', async(req,res)=>{
    const userID = parseInt(req.params.userID);
    const messagesList = await Clients.findOne({userID:userID},{messages:Array});
    console.log(messagesList);
    res.json(messagesList);
})


io.on('connection',(socket)=>{

    socket.on('join',userID=>{
        socket.join(userID);
    })

    socket.on('reply', async(message)=>{
        const msgObj = {
            message:message.message,
            by:message.by
        }
        const foundUSer = await Clients.findOneAndUpdate({userID:parseInt(message.userID)} ,{"$push": {messages:msgObj}});        
        io.to(message.userID).emit('messageToClient', msgObj);
    })
})


server.listen(port,()=>{
    console.log(`app is running on ${port}`)
})