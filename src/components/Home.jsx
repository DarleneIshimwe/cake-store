import { useNavigate } from "react-router-dom";
import cakeImage from "../assets/mads-eneqvist-Xb5c2x6wJPc-unsplash.jpg";

function Home() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/contact", { state: { message: "I want to order a cake!" } });
  };

  return (
    <div className="container">
      <div className="contains">
        <img src={cakeImage} alt="Cake" className="hero-img" />
        <button onClick={handleOrderNow}>Order Now</button>
      </div>
      <div className="buttons">
        <p>
          {" "}
          A party without cake is just a meeting <br /> Hurry up
        </p>
        <button onClick={() => navigate("/about")}>View Products</button>
        <button onClick={handleOrderNow}>Order Now</button>
      </div>
    </div>
  );
}

export default Home;
