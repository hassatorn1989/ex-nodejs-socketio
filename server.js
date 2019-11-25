const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on("connection", function(socket) {
  console.log("connection");
    socket.on("join", function(data) {
        setInterval(() => {
            socket.emit("messages", "Hello from server"); 
        }, 1000);
    });
});

server.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

//Run app, then load http://localhost:3000 in a browser to see the output.