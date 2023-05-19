const express = require("express");
const app = express();

const {MongoClient} = require("mongodb");
const baseUrl = "mongodb://localhost:27017";
const dbmongo = new MongoClient(baseUrl);

app.listen(5100, function(req, res){
    console.log("Marvellous server is live");
});

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
  
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept");
  
    next();
});

app.get('/', (req, res)=>{
    res.send("Marvellous server is live...");
});

app.get('/getBatches', async (req, res)=>{
    let data = await getConnection();
    data = await data.find({}).toArray();
    console.log(data);
    res.json(data);
});

async function getConnection(){
    let result = await dbmongo.connect();
    let db = result.db("Marvellous");
    let collection = db.collection("Batches");
    return collection;
}