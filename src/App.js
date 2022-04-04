import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import Reviews from './components/Reviews/Reviews'
import Blogs from './components/Blogs/Blogs'
import DashBoard from './components/DashBoard/DashBoard'
import About from './components/About/About'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/dashboards' element={<DashBoard />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route >
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </div>
  );
}

export default App;
