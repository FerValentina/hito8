import { useEffect, useState } from 'react'
import CardPizza from '../components/CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(res => res.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error al cargar pizzas:', error))
  }, [])

  return (
    <div className="container py-5 d-flex flex-wrap justify-content-center gap-4">
      {pizzas.map(pizza => (
        <CardPizza key={pizza.id} {...pizza} />
      ))}
    </div>
  )
}

export default Home
