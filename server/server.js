import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors()); // middleware
// middleware is a bridge between server and client


// endpoint
app.get("/message", function(request, response){
  response.json({ message: "Hiya, here's my reply"});
});


// start the server
app.listen(8080, function (){
  console.log("Server is listening to port 8080");
});

// Make sure you run 'node server' to run this file and
// start the server. Same as typing 'node server.js'.

