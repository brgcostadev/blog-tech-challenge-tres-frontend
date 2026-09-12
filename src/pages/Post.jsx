import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function carregarPost() {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Erro ao carregar post:", error);
      }
    }

    carregarPost();
  }, [id]);

  if (!post) {
    return <p>Carregando post...</p>;
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>Autor: {post.author}</p>
      <p>{post.content}</p>
    </main>
  );
}

export default Post;
