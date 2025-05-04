import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, total } = useCart();
  const { token } = useUser();

  const handleCheckout = async () => {
    if (!token) {
      alert("Debes iniciar sesión para pagar");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("¡Compra realizada con éxito!");
      } else {
        alert(data.message || "Error al pagar");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container my-5">
      <h2>Carrito</h2>
      {/* Mostrar pizzas del carrito */}
      <h4>Total: ${total.toLocaleString('es-CL')}</h4>
      <button className="btn btn-primary" onClick={handleCheckout} disabled={!token}>Pagar</button>
    </div>
  );
};

export default Cart;



