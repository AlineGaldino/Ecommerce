import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import Navbar from './component/Navbar';
import Home from './component/Home';
import Cart from './pages/Cart';
import Preview from './pages/Preview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Preview/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
