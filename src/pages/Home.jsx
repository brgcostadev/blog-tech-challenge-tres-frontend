import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [busca, setBusca] = useState("");
  const termo = busca.toLowerCase();

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
    return (
      post.title.toLowerCase().includes(termo) ||
      post.content.toLowerCase().includes(termo) ||
      post.author.toLowerCase().includes(termo)
    );
  });

  return (
    <main>
      <h1>Posts</h1>

      <input
        type="text"
        placeholder="Buscar posts..."
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
        list="sugestoes"
      />

      <datalist id="sugestoes">
        {posts.map((post) => (
          <option key={post.id} value={post.title} />
        ))}
      </datalist>

      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        postsFiltrados.map((post) => (
          <article key={post.id}>
            <h2>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p>Autor: {post.author}</p>
            <p className="conteudo-post">
              {post.content.length > 150
                ? `${post.content.slice(0, 150)}...`
                : post.content}
            </p>
          </article>
        ))
      )}
    </main>
  );
}

export default Home;
