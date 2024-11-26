// Imersão Back-end Node.js | Alura | Aluno: Lucas E. Dickmann

import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Array de posts (dados fictícios)
const posts = [
  {
    id: 1,
    descricao: "Um gatinho astronauta explorando um novo planeta",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao:
      "Um gatinho comandante dando ordens à sua tripulação de ratinhos",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Um gatinho astronauta fazendo um selfie em um buraco negro",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    descricao:
      "Um gatinho astronauta cultivando plantas em uma estação espacial",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 5,
    descricao: "Um gatinho astronauta pilotando um disco voador",
    image: "https://placecats.com/millie/300/150",
  },
];

// Cria uma instância do Express
const app = express();
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando ");
});
