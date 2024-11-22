// Imersão Back-end Alura | Aluno: Lucas E. Dickmann

import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Um gatinho astronauta explorando um novo planeta",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Um gatinho comandante dando ordens à sua tripulação de ratinhos",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Um gatinho astronauta fazendo um selfie em um buraco negro",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    descricao: "Um gatinho astronauta cultivando plantas em uma estação espacial",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 5,
    descricao: "Um gatinho astronauta pilotando um disco voador",
    image: "https://placecats.com/millie/300/150",
  }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando ");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  })
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
