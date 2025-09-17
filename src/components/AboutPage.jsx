import { useState } from "react";
import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/cake2.jpg";
import cake3 from "../assets/cake3.jpg";

function About() {
  const cakes = [
    {
      id: 1,
      name: "blueberries Delight",
      description: "Rich blueberries test sponge with creamy frosting.",
      image: cake1,
    },
    {
      id: 2,
      name: "Strawberry Dream",
      description: "Fresh strawberries with vanilla cream layers.",
      image: cake2,
    },
    {
      id: 3,
      name: "Classic Chocolate cupcake",
      description: "Smooth and creamy with a biscuit base.",
      image: cake3,
    },
  ];

  
  const [cart, setCart] = useState([]);

  const handleAddToCart = (id) =>{
    if(!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((cakeId) => cakeId !== id));
  };

  return (
    <div className="cards-container">
      {cakes.map((cake) => (
        <div key={cake.id} className="card">
          <img src={cake.image} alt={cake.name} className="card-img" />
          <h2>{cake.name}</h2>
          <p>{cake.description}</p>

          {cart.includes(cake.id) ? (
            <>
              <p className="cart-message">
                ✅ {cake.name} has been added to your cart!
              </p>
              <button className="remove" onClick={() => handleRemoveFromCart(cake.id)}>
                Remove from Cart
              </button>
            </>
          ) : (
            <button className="addTocart" onClick={() => handleAddToCart(cake.id)}>
              Add to Cart
            </button>

          )}

        </div>
      ))}
    </div>
  );
}

export default About;

