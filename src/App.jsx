import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CriarPost from "./pages/CriarPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/criar" element={<CriarPost />} />
    </Routes>
  );
}

export default App;
