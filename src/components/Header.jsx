import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { autenticado } = useAuth();

  return (
    <header>
      <h1>Blog Tech Challenge</h1>

      <nav>
        <Link to="/">Início</Link>

        {autenticado ? (
          <Link to="/admin">Administração</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
