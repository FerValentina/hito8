import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { PizzasProvider } from './context/PizzasContext'
import { UserProvider } from './context/UserContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'

import { useUser } from './context/UserContext'

const AppRoutes = () => {
  const { token } = useUser();  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />} />
      <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <CartProvider>
      <PizzasProvider>
        <UserProvider>
          <BrowserRouter>
            <Navbar />
            <AppRoutes /> 
            <Footer />
          </BrowserRouter>
        </UserProvider>
      </PizzasProvider>
    </CartProvider>
  );
};

export default App;




