// Imersão Back-end Node.js | Alura | Aluno: Lucas E. Dickmann

import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
  // Chama a função para buscar os posts
  const posts = await getTodosPosts();
  // Envia os posts como resposta em formato JSON com status 200 (OK)
  res.status(200).json(posts);
}
