import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
<<<<<<< HEAD
import Profile from './Pages/Profile';
import Landingpage from './Pages/Landingpage';
=======
>>>>>>> 9f682a0730b8fcaac9723c7293e0bd785a0d62c4

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
<<<<<<< HEAD
        <Route path='/profile' element={<Profile />} />
        <Route path='/landingpage' element={<Landingpage />} />
=======
>>>>>>> 9f682a0730b8fcaac9723c7293e0bd785a0d62c4
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
