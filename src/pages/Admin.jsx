import { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Admin() {
  const [posts, setPosts] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

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

    async function excluirPost(id) {
      try {
        await api.delete(`/posts/${id}`);

        setPosts(posts.filter((post) => post.id !== id));
      } catch (error) {
        console.error("Erro ao excluir post:", error);
      }
    }
  }, []);

  function sair() {
    logout();
    navigate("/login");
  }

  return (
    <main>
      <h1>Administração de Posts</h1>

      <p>Gerencie os posts do blog.</p>

      <button onClick={sair}>Sair</button>

      <Link to="/criar">Novo post</Link>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>Autor: {post.author}</p>
          <Link to={`/editar/${post.id}`}>Editar</Link>
          <button onClick={() => excluirPost(post.id)}>Excluir</button>
        </article>
      ))}
    </main>
  );
}

export default Admin;
