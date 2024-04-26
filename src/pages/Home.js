import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import HomeGrid from "../components/HomeGrid";
import moviesData from "./data/moviesData";

function Discover() {

  return (
    <HomeContainer>
      <Header />
      <GridContainer>
        <HomeGrid moviesData={moviesData} />
      </GridContainer>
    </HomeContainer>
  );
}

export default Discover;

const HomeContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 20px;
`;