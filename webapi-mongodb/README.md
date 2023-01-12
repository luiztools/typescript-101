# WebAPI MongoDB

A simple Node.js WebAPI example written with TypeScript, Express and MongoDB.

## How to Run

1. run the mongod first (MongoDB Server)
2. cd webapi-mongodb
3. npm install
4. copy .env.example as .env
5. fill the .env
6. "npm run dev" to run as dev
7. after tests, "npm run compile" and "npm start" to run in production

## Endpoints

GET /customers/ - list all customers

GET /customers/:id - list one customer (by id)

POST /customers/ - save a new customer (at body)

PATCH /customer/:id - update an old customer (new data in the body, id in URL)

DELETE /customers/:id - delete an existing customer (by id)

## Referências

Tutorial no blog: https://www.luiztools.com.br/post/como-criar-uma-webapi-com-node-js-express-typescript-e-mongodb

Redes sociais: https://about.me/luiztools

Receba novidades no Telegram: https://t.me/luiznews

Meus livros: https://www.luiztools.com.br/meus-livros

Meus cursos: https://www.luiztools.com.br/meus-cursos