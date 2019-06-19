const express= require('express')
const {MongoClient,ObjectID}=require ('mongodb')
const bodyParser=require('body-parser')
const assert =require ('assert')
const app=express()
app.use (bodyParser.json())
const mongo_url='mongodb://localhost:27017';
const dataBase='BPS-PROJECT';
MongoClient.connect(mongo_url, { useNewUrlParser: true } ,
    (err,client)=>{
    assert.equal(err,null,'data base connexion failed')
    const db=client.db(dataBase)


app.post('/add_emetteur',(req,res)=>{
    let addemetteur= req.body
    db.collection("emetteur") .insertOne(addemetteur,(err,data)=>{
    if(err) res.send("cant not add emetteur");
    else res.send("new emetteur added");
    });
   
    });
    app.post('/add_ticket',(req,res)=>{
        let addticket= req.body
        db.collection("ticket") .insertOne(addticket,(err,data)=>{
        if(err) res.send("cant not add ticket");
        else res.send("new ticket added");
     });
       
     });
 app.get("/list-emetteurs",(req,res)=>{
        db.collection("emetteur").find().toArray((err,data)=>{
        if(err) res.send("cant not get emetteurs");
        else res.send(data);
   });
});
app.get("/list-tickets",(req,res)=>{
   
    db.collection("ticket") .find().toArray((err,data)=>{
    if(err) res.send("cant not get tickets");
    else res.send(data);
   });
});

app.get("/list-tickets-emetteur/:idEmetteur",(req,res)=>{
   let id=req.params.idEmetteur
    db.collection("ticket").find({IdEmetteur:id}).toArray((err,data)=>{
    if(err) res.send("cant not get tickets");
    else res.send(data);
   });
});

app.delete('/delete-emetteur/:id', (req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection("emetteur").findOneAndDelete({_id:id},(err,data)=>{
        if(err) console.log('can not delete')
        else res.send(data)
    })
})
app.put("/editEmetteur/:id", (req, res) => {
    let editEmetteur = req.body;
    let id = ObjectID(req.params.id);
    db.collection("emetteur").findOneAndUpdate(
      { _id: id },
      { $set: { ...editEmetteur } },
      (err, data) => {
        if (err) res.send("cant edit emetteur");
        else res.send(data);
      }
    );
  });




});
app.listen(3008,err=>{
    if (err) console.log('server err');
    else console.log('server is running en port 3008');
})