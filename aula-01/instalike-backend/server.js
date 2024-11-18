// Aula 01 | Imersão Back-end Alura | Aluno: Lucas E. Dickmann

import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("Servidor escutando ");
});

app.get("/api", (rep, res) => {
  res.status(200).send("Bem vindo a API do Instalike | Imersão Back-end Alura");
});
