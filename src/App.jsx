import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CriarPost from "./pages/CriarPost";
import EditarPost from "./pages/EditarPost";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/criar" element={<CriarPost />} />
      <Route path="/editar/:id" element={<EditarPost />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
