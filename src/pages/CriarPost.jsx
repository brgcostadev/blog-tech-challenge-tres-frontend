import { useState } from "react";
import api from "../services/api";

function CriarPost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  async function enviarPost(event) {
    event.preventDefault();

    try {
      await api.post("/posts", {
        title,
        content,
        author,
      });

      setTitle("");
      setContent("");
      setAuthor("");

      alert("Post criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar post:", error);
    }
  }

  return (
    <main>
      <h1>Criar novo post</h1>

      <form onSubmit={enviarPost}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <button type="submit">Criar post</button>
      </form>
    </main>
  );
}

export default CriarPost;
