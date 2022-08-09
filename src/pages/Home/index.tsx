import { useNavigate } from "react-router-dom";
import { HomeContainer } from "./style";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <div>
        <h1>Water Jug Challenge Machine</h1>
        <button onClick={() => navigate("/solution")}>Use</button>
      </div>
    </HomeContainer>
  );
};

export default Home;
