import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Post from './pages/Post';
import Nav from './components/Navbar';
import ScrollToAnchor from './components/ScrollToAnchor';

function App() {

  return (
    <div>
      <Router>
      <ScrollToAnchor/>
        <div className = "nav">
        <Nav/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog/" element={<Blog/>}/>
          <Route path="/blog/post/:id" element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  );
}
/*
bugs to fix:
navbar links, enable highlighting when at a specific url.
bold the navbar words
*/
export default App;