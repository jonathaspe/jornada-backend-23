const express = require("express");
const app = express();

const port = 3000;

//Habilitar o processamento de JSON
app.use(express.json());

//Endpoint principal
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//Endpoint /oi
app.get("/oi", (req, res) => {
    res.send("Olá, Mundo!");
  });

//Endpoint /herois
 const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro", "Homem Aranha"];

 //Read All - [GET] /herois
 app.get("/herois", function (req, res) {
    res.send(lista.filter(Boolean));
  });

 //Create - [POST] /herois
 app.post("/herois", function (req, res) {
  console.log(req.body, typeof req.body);

  //Extraionomedo Body da Request (Corpo da Requisição)
  const item = req.body.nome;

  // Inserir o item na lista
  lista.push(item);

  // Enviamos uma resposta de sucesso
  res.send(`Novo héroi ${item} cadastrado com sucesso!`);
});

 //Read by ID - [GET] /herois/id
 app.get("/herois/:id", function (req, res) {
  //Pegamos o parâmetro de rota ID
  const id = req.params.id - 1;

  //Pegamos a informação da lista
  const item = lista[id];

  if (!item){
    res.send("Heroi não encontrado.");

    return;
  }

  //Exibir o item na resposta do endpoint
  res.send(item);
});

//Update - [PUT] /herois/:id
app.put("/herois/:id", function (req, res) {

   //Pegamos o parâmetro de rota ID
   const id = req.params.id - 1;

   //Pegamos a informação da lista
   const item = req.body.nome;

  //Atualizar o item da lista
   lista[id] = item;

  // Enviamos uma resposta de sucesso
  res.send(`Item editado com sucesso para o novo heroi ${item}`);
});

//Delete - [DELETE] /herois/:id
app.delete("/herois/:id", function (req, res) {
  //Pegamos o parâmetro da rota ID
  const id = req.params.id -1;
  
  //Excluir o item da lista
  delete lista[id];

  // Enviamos uma resposta informando que o item foi excluído
  res.send("Item excluído com sucesso!");
});

app.listen(port, () => {
  console.info(`App rodando em localhost:${port}`);
});