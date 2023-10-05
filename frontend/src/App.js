import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Blogheader from './components/blogheader'
import Home from './pages/home'
import Blogdetail from './components/blogdetail';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Blogheader />
      <Routes>
        <Route path='/' element=<Home /> /> 
        <Route
          path="/blog/details/:blogid"
          element=<Blogdetail />
        />       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
