const http = require("http");
const cors = require("cors");
const express = require("express");
const { Server } = require("socket.io");
const app = express();
app.use(cors());


const server = http.createServer(app);

const io = new Server(3001, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    },
})

io.on("connection", (socket) =>{
    console.log("L'utilisateur ", socket.id, " vient de se connecter");

    socket.on("disconnect", ()=>{
        console.log("L'utilisateur ", socket.id, " vient de se déconnecter");
    })
})


server.listen(3001, () =>{
    console.log("LE SERVER A BIEN DÉMARRÉ")
})