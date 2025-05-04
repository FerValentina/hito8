import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1>404 - Página no encontrada</h1>
      <p>¡Oops! Parece que te perdiste.</p>
      <Link to="/" className="btn btn-primary mt-3">Volver al Inicio</Link>
    </div>
  )
}

export default NotFound
