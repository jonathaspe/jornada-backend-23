# Backend REST API

Projeto para a criação de uma API REST e de um banco de dados com MongoDB

Protocolo de comunicação: HTTP ou HTTPS IP: localhost Porta: 3000

URI: http://localhost:3000/ Rota ou Endpoint: /

Criação de novos caminhos dentro da mesma URL. em um site, novos caminhos geralmente levam a páginas diferentes

URI: http://localhost:3000/herois

Rota ou Endpoint: /herois

Todas as requisições possuem VERBOS

REST: Verbos específicos para as requisições RESTful: Uma aplicação (API) capaz de se comunicar com verbos REST

[GET] http://localhost:3000/herois
[POST] http://localhost:3000/herois

Foram criados endpoints com os principais métodos (CRUD):
GET -> Obter informações 
POST -> Criar informações novas 
PUT -> Atualizar informações já existentes 
DELETE -> Remover informações já existentes

Também posso enviar um corpo da requisição

Toda requisição possui: 
- URL 
- HEADER 
- BODY

Exemplo do JSON body enviado na requisição de POST:
[POST] http://localhost:3000/mensagem 
Body: 
{
    nome": "Mulher Maravilha"
}

JSON -> JavaScript Object Notation
