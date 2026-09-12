import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function entrar(event) {
    event.preventDefault();

    if (usuario === "professor" && senha === "1234") {
      login();
      navigate("/admin");
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={entrar}>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

export default Login;
