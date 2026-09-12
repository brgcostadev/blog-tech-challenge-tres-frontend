import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function carregarPosts() {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      }
    }

    carregarPosts();
  }, []);

  const postsFiltrados = posts.filter((post) => {
    return post.title.toLowerCase().includes(busca.toLowerCase());
  });

  async function excluirPost(id) {
    try {
      await api.delete(`/posts/${id}`);

      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Erro ao excluir post:", error);
    }
  }

  return (
    <main>
      <h1>Posts</h1>

      <input
        type="text"
        placeholder="Buscar posts..."
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />

      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        postsFiltrados.map((post) => (
          <article key={post.id}>
            <h2>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p>Autor: {post.author}</p>
            <p>{post.content}</p>
            <button onClick={() => excluirPost(post.id)}>Excluir</button>
          </article>
        ))
      )}
    </main>
  );
}

export default Home;
