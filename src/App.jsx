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
import Levelx1 from './Pages/Levelx1';
import Levelx2 from './Pages/Levelx2';
import UpgradeLvl1 from './Pages/UpgradeLvl1';
import UpgradeLvl2 from './Pages/UpgradeLvl2';
import Login from './Pages/Login';
import Authenticate from './Pages/Authenticate';
import Passid from './Pages/Passid';
import { useState, useEffect } from 'react';
import Stats from './Pages/Stats';
import Partner from './Pages/Partner';
import Links from './Pages/Links';
import Calculator from './Pages/Calculator';
import AccountSearch from './Pages/AccountSearch';
import Support from './Pages/Support';
import Register from './Components/Register/Register';
import Social from './Pages/Social';
import NumberRedirect from './NumberRedirect';
import SocialRewards from './Pages/SocialRewards';
import { useAccount } from 'wagmi';

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
    '/Upgradexone',
    '/Upgradextwo',
    '/login',
    '/auth',
    '/passId',
    '/',
    '/social',
    '/accountSearch',
    '/support',
    '/register',
    '/redirect',
  ];

  const [showHome, setShowHome] = useState(true);
  const [showBar, setShowBar] = useState(false);

  return (
    <>
      <ScrollToTop />
      <NumberRedirect />
      {!hideNavbarFooterRoutes.includes(location.pathname) && (
        <Navbar home={setShowHome} setShowBar={setShowBar} />
      )}
      <Routes>
        <Route path='/' element={<Landingpage />} />
        {showHome && (
          <Route
            path='/home'
            element={<Home showBar={showBar} setShowBar={setShowBar} />}
          />
        )}
        <Route path='/social' element={<Social />} />
        <Route path='/socialReward' element={<SocialRewards />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        {showHome && <Route path='/lvlxone' element={<Levelx1 />} />}
        {showHome && <Route path='/lvlxtwo' element={<Levelx2 />} />}
        <Route path='/Upgradexone' element={<UpgradeLvl1 />} />
        <Route path='/Upgradextwo' element={<UpgradeLvl2 />} />
        <Route path='/auth' element={<Authenticate />} />
        <Route path='/passId' element={<Passid />} />
        <Route path='/register' element={<Register />} />
        {showHome && <Route path='/partner' element={<Partner />} />}
        {showHome && (
          <Route path='/accountSearch' element={<AccountSearch />} />
        )}
        {showHome && <Route path='/links' element={<Links />} />}
        {showHome && <Route path='/stats' element={<Stats />} />}
        {showHome && <Route path='/calculator' element={<Calculator />} />}
        <Route path='/support' element={<Support />} />
        <Route path='/redirect' element={<Register />} />
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
