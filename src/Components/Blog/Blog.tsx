import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, CreatePost, Login, Logout, Navbar } from './Components';
import { useState } from 'react';

const Blog = () => {
  const [isAuth, setIsAuth] = useState(false);

  const isAuthHandler = (data: boolean) => {
    setIsAuth(data);
  };
  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}></Route>
        <Route path="/login" element={<Login isAuthHandler={isAuthHandler} />}></Route>
        <Route path="/logout" element={<Logout isAuthHandler={isAuthHandler} />}></Route>
      </Routes>
    </Router>
  );
};

export default Blog;
