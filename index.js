const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

//const url = "mongodb://localhost:27017";
const url = "mongodb+srv://admin:V90K7ehx2krw7OlM@cluster0.gbnr4oi.mongodb.net";
//const dbName = "jonathaspe";
const dbName = "jornada-backend-agosto-23";
const client = new MongoClient(url);

async function main(){

console.info("Conectando ao banco de dados...");
await client.connect();
console.info("Banco de dados conectado com sucesso!");

const db = client.db(dbName);
const collection = db.collection("herois");

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
 app.get("/herois", async function (req, res) {
    const itens = await collection.find().toArray();
  	res.send(itens);
  });

 //Create - [POST] /herois
 app.post("/herois", async function (req, res) {
  //console.log(req.body, typeof req.body);

  //Extraionomedo Body da Request (Corpo da Requisição)
  const item = req.body;

  // Inserir o item na collection
  await collection.insertOne(item);

  // Enviamos uma resposta de sucesso
  res.status(201).send(item);
});

 //Read by ID - [GET] /herois/id
 app.get("/herois/:id", async function (req, res) {
  //Pegamos o parâmetro de rota ID
  const id = req.params.id;

  //Pegamos a informação da lista
  const item = await collection.findOne({_id: new ObjectId(id), });

  if (!item){
    res.send("Heroi não encontrado.");

    return;
  }
  
  //Exibir o item na resposta do endpoint
  res.send(item);

});

//Update - [PUT] /herois/:id
app.put("/herois/:id", async function (req, res) {

   //Pegamos o parâmetro de rota ID
   const id = req.params.id;

   //Pegamos a informação da lista
   const item = req.body;

  //Atualizar o item da lista
   await collection.updateOne({_id: new ObjectId(id)}, {$set: item});

  // Enviamos uma resposta de sucesso
  res.send(`Item editado com sucesso para o novo heroi ${item}`);
});

//Delete - [DELETE] /herois/:id
app.delete("/herois/:id", async function (req, res) {
  //Pegamos o parâmetro da rota ID
  const id = req.params.id;
  
  //Excluir o item da lista
  await collection.deleteOne({_id: new ObjectId(id)});

  // Enviamos uma resposta informando que o item foi excluído
  res.send(`Item excluído com sucesso!`);
  res.status(204).send();

});

app.listen(port, () => {
  console.info(`App rodando em localhost:${port}`);
});

}

main();