import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  const formatPrice = (num) => num.toLocaleString('es-CL');

  return (
    <nav className="navbar navbar-dark bg-dark py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">Pizzería Mamma Mia!</Link>

        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-warning btn-sm">🍕 Home</Link>
          {token ? (
            <>
              <Link to="/profile" className="btn btn-light btn-sm">🔓 Profile</Link>
              <button onClick={logout} className="btn btn-light btn-sm">🔒 Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-warning btn-sm">🔐 Login</Link>
              <Link to="/register" className="btn btn-warning btn-sm">🔐 Register</Link>
            </>
          )}
          <Link to="/cart" className="btn btn-outline-info btn-sm">
            🛒 Total: ${formatPrice(total)}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

