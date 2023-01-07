const express = require("express");
const app = express();


// Estou dizendo para o Express usar o EJS com o View Engine.

app.set('view engine','ejs');

app.get("/",(req, res) => {
    res.render("principal/perfil") // comando para carregar aquivivo dentro de uma outra pasta...
});

app.listen(8080,()=>{
    console.log("App rodando!");
});



