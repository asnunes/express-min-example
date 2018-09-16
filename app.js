var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("WELCOME TO HOME PAGE!");
});

app.get("/speak/:animal", function(req, res){
    // any animal
    var animal = req.params.animal
    var sounds = {
        cow: "Moo!",
        dog: "Woof!",
        cat: "Meow!",
        fox: "What does the Fox say?",
        bug: "No bugs, please."
    }

    if(sounds[animal] == undefined){
        res.send("Who is it?");
    } else{
        res.send(sounds[animal]);
    }
});

app.get("/repeat/:word/:id", function(req, res){
    var word = req.params.word + " ";
    var id = Number(req.params.id);
    
    var toSend = word.repeat(id);
    res.send(toSend);
});

app.get("*", function(req, res){
    res.send("Page not Found. What are you doing with your life?");
})

app.listen(3000, function(){
    console.log("listening in port 3000");
});