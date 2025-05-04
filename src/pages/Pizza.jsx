import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then(res => res.json())
      .then(data => setPizza(data))
      .catch(err => console.error('Error cargando pizza', err));
  }, [id]);

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>;

  return (
    <div className="container text-center mt-5">
      <img src={pizza.img} alt={pizza.name} className="img-fluid" style={{ maxWidth: '400px' }} />
      <h2 className="mt-3">{pizza.name}</h2>
      <h4 className="text-success">${pizza.price.toLocaleString('es-CL')}</h4>
      <p className="mt-3">{pizza.desc}</p>
      <h5>Ingredientes:</h5>
      <ul className="list-unstyled">
        {pizza.ingredients.map((ingredient, idx) => (
          <li key={idx}>🍕 {ingredient}</li>
        ))}
      </ul>
      <button className="btn btn-success mt-3">Añadir al carrito 🛒</button>
    </div>
  )
}

export default Pizza;

