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

function App() {
  const location = useLocation();

  const hideNavbarFooterRoutes = ['/Upgradex3', '/Upgradex4'];

  return (
    <>
      {!hideNavbarFooterRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/landingpage' element={<Landingpage />} />
        <Route path='/lvlx3' element={<Levelx3 />} />
        <Route path='/lvlx4' element={<Levelx4 />} />
        <Route path='/Upgradex3' element={<UpgradeLvl3 />} />
        <Route path='/Upgradex4' element={<UpgradeLvl4 />} />
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
