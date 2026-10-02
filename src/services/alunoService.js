import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Listar todos os professores - GET
export async function listarProfessores() {
  const resposta = await api.get("/professores");
  return resposta.data;
}

// Criar um novo professor - POST
export async function criarProfessor(professor) {
  const resposta = await api.post("/professores", professor);
  return resposta.data;
}

// Excluir um professor - DELETE
export async function excluirProfessor(id) {
  await api.delete("/professores/" + id);
}
