import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Landingpage from './Pages/Landingpage';
import Levelx3 from './Pages/Levelx3';
import Levelx4 from './Pages/Levelx4';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/landingpage' element={<Landingpage />} />
        <Route path='/lvlx3' element={<Levelx3 />} />
        <Route path='/lvlx4' element={<Levelx4 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
