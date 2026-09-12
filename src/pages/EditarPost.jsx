import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function EditarPost() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function carregarPost() {
      try {
        const response = await api.get(`/posts/${id}`);

        setTitle(response.data.title);
        setAuthor(response.data.author);
        setContent(response.data.content);
      } catch (error) {
        console.error("Erro ao carregar post:", error);
      }
    }

    carregarPost();
  }, [id]);

  async function salvarAlteracoes(event) {
    event.preventDefault();

    try {
      await api.put(`/posts/${id}`, {
        title,
        content,
        author,
      });

      alert("Post atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar post:", error);
    }
  }

  return (
    <main>
      <h1>Editar post</h1>

      <form onSubmit={salvarAlteracoes}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <button type="submit">Salvar alterações</button>
      </form>
    </main>
  );
}

export default EditarPost;
