// this is main connection of server

// const { Socket } = require("dgram");
const express = require("express");

const app = express();
const http = require("http").Server(app);
//path dene k
const path = require("path");
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };
  var fileName = "index.html";
  res.sendFile(fileName, options);
});

//socket  setup  on the server side

//when connect hoga io.on menas

//namespace connection
// var cnsp = io.of("/customeNamespace");
// cnsp.on("connection", (socket) => {
//   console.log("A user connected");

//   cnsp.emit("CustomEvent", "Tester event call")
//   socket.on("disconnect", () => {
//     console.log("a user disconnected");
//   });
// });

// var user = 0;
// var roomno = 1;
io.on("connection", (socket) => {
  console.log("A user connected");
  // socket.join("room-" + roomno);
  // io.sockets
  //   .in("room-" + roomno)
  //   .emit("connectedRoom", "You are connected to room no " + roomno);
  // // user++;
  // io.sockets.emit("broadcast", { message: user + "connected" });
  // socket.emit("newUser", { message: "HI, welcome dear" });
  // socket.broadcast.emit("newUser", { message: user + " user connected" });

  //SERVER TO CLIENT
  // setTimeout(()=>{
  //     //customEvent
  //     socket.emit("customevent", {description: "My custome event"});

  // },2000)

  //   //CLIENT TO SERVER
  //   socket.on("customeEvent", (data) => {
  //     console.log(data);
  //   });

  //when user disconnected
  socket.on("disconnect", () => {
    console.log("a user disconnected");
    // user--;
    // // io.sockets.emit("broadcast", { message: user + "connected" });
    // socket.broadcast.emit("newUser", { message: user + "user connected" });
  });
});

http.listen(3000, () => {
  console.log("server is ready on port");
});
