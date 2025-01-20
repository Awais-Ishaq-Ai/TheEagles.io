import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Landingpage from './Pages/Landingpage';
import Levelx3 from './Pages/Levelx3';
import Levelx4 from './Pages/Levelx4';
import UpgradeLvl3 from './Pages/UpgradeLvl3';
import UpgradeLvl4 from './Pages/UpgradeLvl4';
import Login from './Pages/Login';
import Authenticate from './Pages/Authenticate';
import Passid from './Pages/Passid';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  const location = useLocation();

  const hideNavbarFooterRoutes = [
    '/Upgradex3',
    '/Upgradex4',
    '/login',
    '/auth',
    '/passId',
  ];

  const [showHome, setShowHome] = useState(true);

  return (
    <>
      <ScrollToTop />
      {!hideNavbarFooterRoutes.includes(location.pathname) && (
        <Navbar home={setShowHome} />
      )}
      <Routes>
        <Route path='/' element={<Landingpage />} />
        {showHome && <Route path='/home' element={<Home />} />}
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        {showHome && <Route path='/lvlx3' element={<Levelx3 />} />}
        {showHome && <Route path='/lvlx4' element={<Levelx4 />} />}
        <Route path='/Upgradex3' element={<UpgradeLvl3 />} />
        <Route path='/Upgradex4' element={<UpgradeLvl4 />} />
        <Route path='/auth' element={<Authenticate />} />
        <Route path='/passId' element={<Passid />} />
      </Routes>
      {!hideNavbarFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
