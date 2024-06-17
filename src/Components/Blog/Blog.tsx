import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, CreatePost, Login, Logout, Navbar } from './Components';

const Blog = () => {
  const isAuthHandler = (data: 'true' | 'false') => {
    localStorage.setItem('isAuth', data);
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login isAuthHandler={isAuthHandler} />}></Route>
        <Route path="/logout" element={<Logout isAuthHandler={isAuthHandler} />}></Route>
      </Routes>
    </Router>
  );
};

export default Blog;
