const express = require("express");
const app = express();

// app.use((req,res) => {
//     console.log("Got a new request");
//     res.send("Got your request, here's the rsponse");
// });
app.get('/', (req,res) => {
    res.send("Welcome to our homepage!!");
});

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    res.send(`This page has ${subreddit} subreddit`);
});

app.get('/thor', (req,res) => {
    res.send("That's what heros do!!");
});

app.get('/Ironman', (req,res) => {
    res.send("I am Ironman!!");
});

app.get('/search', (req,res) => {
    const {q} = req.query;
    res.send(`Your query string is: ${q}`);
});

app.get('*', (req,res) => {
    res.send("I don't know what path it is!!");
});

app.listen(3000, () =>{
    console.log("Listensing on port 3000!!");
});