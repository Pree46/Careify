import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", function(req,res){
    res.render("index.ejs");
});

app.post("/", function(req,res){
    
});

app.listen({port}, function(){
    console.log("Server is running");
});