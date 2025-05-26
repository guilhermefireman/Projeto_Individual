# WAD.md - Documentação Técnica

##  Nome do Projeto

Projeto Individual Backend - API para Gerenciamento de Eventos

##  Descrição Técnica

Este projeto consiste em uma API RESTful desenvolvida com Node.js e Express.js, utilizando PostgreSQL como banco de dados e Supabase como serviço de hospedagem. O sistema permite:

- Gerenciar eventos (CRUD)
- Gerenciar usuários (CRUD)
- Realizar inscrições de usuários em eventos

A arquitetura segue o padrão MVC para separar responsabilidades de forma organizada e escalável.

---

##  Estrutura do Projeto

Projeto Individual/
├── config/
│ └── database.js # Conexão com o banco
├── controllers/ # Lógica das requisições
│ ├── EventoController.js
│ └── UserController.js
│ └── SubscriptionController.js
├── routes/
│ └── index.js # Rotas centralizadas
├── migrations/
│ └── init.sql # Criação das tabelas
├── .env.example # Exemplo de variáveis de ambiente
├── server.js # Ponto de entrada
├── package.json
├── README.md
└── WAD.md


---

##  Banco de Dados

O banco contém três tabelas principais:

- **users**: armazena informações dos usuários (nome, email, senha)
- **events**: armazena dados dos eventos
- **subscriptions**: tabela relacional entre usuários e eventos

---

##  Arquitetura MVC

- **Model**: manipulado por SQL direto (sem ORM)
- **Controller**: lógica das operações e validações
- **Routes**: define os endpoints acessíveis via API

###  Fluxo:

1. A rota recebe a requisição
2. Encaminha para o controller
3. O controller executa a lógica e se comunica com o banco
4. Retorna a resposta ao cliente

---

##  Endpoints

| Método | Rota                    | Descrição                      |
|--------|-------------------------|--------------------------------|
| POST   | /api/eventos            | Cadastrar evento               |
| GET    | /api/eventos            | Listar eventos                 |
| PUT    | /api/eventos/:id        | Atualizar evento               |
| DELETE | /api/eventos/:id        | Deletar evento                 |
| POST   | /api/usuarios           | Cadastrar usuário              |
| GET    | /api/usuarios           | Listar usuários                |
| POST   | /api/inscricoes         | Inscrever usuário em evento    |

---

## Tecnologias Usadas

- Node.js
- Express.js
- PostgreSQL
- Supabase
- pg
- dotenv

---

##  Como rodar o projeto localmente

```bash
git clone <url-do-repo>
cd Projeto\ Individual
npm install

# Configure o arquivo .env com os dados do Supabase
DB_HOST=...
DB_PORT=5432
DB_USER=...
DB_PASSWORD=...
DB_NAME=...

# Rode as migrações
npm run init-db

# Inicie o servidor
node server.js

Considerações Finais

As senhas de usuários não estão criptografadas (apenas exemplo)
É possível estender o projeto com autenticação (JWT)
A API pode ser consumida por qualquer frontend (React, mobile, etc.)
