**Projeto Individual** 

Este é um projeto backend desenvolvido com Node.js, Express.js e PostgreSQL, seguindo o padrão de arquitetura MVC. A proposta é criar uma API para gerenciar usuários, eventos e inscrições, com integração ao Supabase como banco de dados.

 **Tecnologias Utilizadas**

Node.js
Express
PostgreSQL
Supabase
pg (client PostgreSQL para Node.js)
dotenv

Estrutura de Pastas
Projeto Individual /
├── config/
│   └── database.js
├── controllers/
│   └── EventoController.js
├── routes/
│   └── index.js
├── migrations/
│   └── init.sql
├── .env.example
├── server.js
├── package.json
├── README.md
└── WAD.md

 **Como rodar o projeto**

**1- Clone o repositório:**
git clone <url-do-repositorio>
cd Projeto\ Individual\ \(parte\ 2\)

**2- Instale as dependências:**
npm install

**3 - Configure seu .env com os dados do Supabase:**

DB_HOST=...
DB_PORT=5432
DB_USER=...
DB_PASSWORD=...
DB_NAME=...

Rode a migração do banco:
npm run init-db

**4- Rode a migração do banco:**

npm run init-db

**5-Inicie o servidor:**
node server.js

Endpoints Disponíveis

Método	Rota	Ação
POST	/api/eventos	Cadastra um novo evento
GET	/api/eventos	Lista todos os eventos
PUT	/api/eventos/:id	Atualiza um evento existente
DELETE	/api/eventos/:id	Remove um evento

Banco de Dados

O banco de dados é composto pelas seguintes tabelas:

users – Guarda os dados dos usuários
events – Armazena informações dos eventos
subscriptions – Registra as inscrições de usuários nos eventos

 Organização do Código

O projeto segue a arquitetura MVC:

Model: manipulado via SQL diretamente (sem ORM)
Controller: onde está a lógica das requisições
Routes: define os endpoints da API

Funcionalidades Implementadas

Integração com PostgreSQL via Supabase
Migração de banco de dados com SQL
CRUD completo para eventos
Separação de responsabilidades (MVC)
Uso de variáveis de ambiente para segurança

**Testes**

Use ferramentas como Postman ou Insomnia para testar as rotas da API. Exemplo:

Criar: POST /api/eventos
Listar: GET /api/eventos
Atualizar: PUT /api/eventos/:id
Deletar: DELETE /api/eventos/:id

**Observações**

O Supabase foi usado como host do banco PostgreSQL.
As variáveis sensíveis estão fora do repositório, via .env.
O projeto é focado no backend e pode ser integrado com qualquer frontend.