const express = require("express");
const app = express();

//Habilitar o processamento de JSON
app.use(express.json());

//Endpoint principal
app.get("/", function (req, res) {
  res.send("Hello, World!");
});

//Endpoint /oi
app.get("/oi", function (req, res) {
    res.send("Olá, Mundo!");
  });

//Endpoint /herois
 const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro", "Homem Aranha"];

 //Read All - [GET] /herois
 app.get("/herois", function (req, res) {
    res.send(lista);
  });

 //Create - [POST] /herois
 app.post("/herois", function (req, res) {
  console.log(req.body, typeof req.body);
  res.send("Criar registro");
});

app.listen(3000, () =>
 console.log("Servidor rodando em http://localhost:3000/"));