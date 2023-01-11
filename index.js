const express = require("express");
const app = express();
const bodyParser = require("body-parser");


// Estou dizendo para o Express usar o EJS com o View Engine.
app.set('view engine','ejs');
app.use(express.static('public'));

//Rotas
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get("/",(req, res) => {
    res.render("index")
        
    });

 app.get("/perguntar",(req, res)=>{
    res.render("perguntar");
 });
 
 app.post("/salvarpergunta",(req, res) =>{
   var titulo = req.body.titulo;
   var descricao = req.body.descricao;
   

   res.send("Formulario recebido! titulo " + " " + " descricao " + descricao );
   
  });


app.listen(8080,()=>{
    console.log("App rodando!");});




