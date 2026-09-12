import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CriarPost from "./pages/CriarPost";
import EditarPost from "./pages/EditarPost";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route
        path="/criar"
        element={
          <ProtectedRoute>
            <CriarPost />
          </ProtectedRoute>
        }
      />
      <Route
        path="/editar/:id"
        element={
          <ProtectedRoute>
            <EditarPost />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
