const express = require("express");
const app = express();


// Estou dizendo para o Express usar o EJS com o View Engine.

app.set('view engine','ejs');

app.get("/",(req, res) => {
    let nome = "Fabio Rodolfo";
    let lang = "Javascript";
    res.render("index",{
        nome: nome, 
        lang: lang, 
        empresa: "SnakeTattoo"});
    });


app.listen(8080,()=>{
    console.log("App rodando!");
});



