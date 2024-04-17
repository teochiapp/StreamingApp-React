import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <h1>Esta es la página de Home</h1>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;
