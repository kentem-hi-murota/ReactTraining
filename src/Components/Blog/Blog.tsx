import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, CreatePost, Login, Logout, Navbar } from "./Components";

const Blog = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
};

export default Blog;
