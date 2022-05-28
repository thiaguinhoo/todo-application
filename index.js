// NPM = NODE PACKAGE MANAGER
// npm install <nome_do_pacote>
// npm run <nome_do_comando>

// express recuperando dados do request

// /usuario?idade=18 => request.query.idade
// /usuario/:nome => /usuario/elton => request.params.nome
// /login => <input id="username" name="username" /> => request.body.username

const express = require("express");

const app = express();

// configurando pasta com arquivos estaticos
app.use(express.static("public"));

// permitindo dados de um formulário
app.use(express.urlencoded({ extended: true }));

// rota que devolve um arquivo html da pasta public/
app.get("/", async (request, response) => response.sendFile("index.html"));

// rota com parâmetro dinâmico (usuario)
app.get("/:usuario", async (request, response) => {
  if (request.params.usuario === "elton") {
    response.send("<h1>Bem vindo, Elton</h1>");
  } else {
    response.send("<h1>Opa, não é o elton</h1>");
  }
});

// rota get do login
app.get("/login", async (request, response) =>
  response.send("Página de login")
);

// post do login
app.post("/login", (request, response) => {
  response.send(
    "<h1>Seja muito bem vindo, " + request.body.username + "</h1>",
    200
  );
});

// Colocando o servidor pra rodar e chamando o callback quando ele subiu
app.listen(3333, () => console.log("Servidor rodando"));

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       data: "Hello World!",
//     })
//   );
// });

// server.listen(3333);
