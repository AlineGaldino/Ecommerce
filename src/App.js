import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import Navbar from './component/Navbar';
import Home from './component/Home';
import Preview from './pages/Preview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Preview/>} />
      </Routes>
    </Router>
  );
}

export default App;
