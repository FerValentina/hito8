import { createContext, useContext, useState, useEffect } from "react";

const PizzasContext = createContext();

export const usePizzas = () => useContext(PizzasContext);

export const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(res => res.json())
      .then(data => {
        setPizzas(data);
        setLoading(false);
      })
      .catch(error => console.error('Error al cargar pizzas', error));
  }, []);

  return (
    <PizzasContext.Provider value={{ pizzas, loading }}>
      {children}
    </PizzasContext.Provider>
  );
}
