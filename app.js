var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("WELCOME TO HOME PAGE!");
});

app.get("/speak/:animal", function(req, res){
    // any animal
    if(req.params.animal == "cow"){
        res.send("Moo!");
    } else if(req.params.animal == "dog"){
        res.send("Woof!");
    } else if(req.params.animal == "cat"){
        res.send("Meow!");
    } else if(req.params.animal == "fox"){
        res.send("What does the Fox say?");
    } else if(req.params.animal == "bug"){
        res.send("No bugs, please");
    } else{
        res.send("Who is it?");
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