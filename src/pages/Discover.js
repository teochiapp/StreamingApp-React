import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

import ContentGrid from "../components/ContentGrid";
import moviesData from "./data/moviesData";

function Discover() {

  return (
    <DiscoverContainer>
      <Header />
      <GridContainer>
        <ContentGrid moviesData={moviesData} />
      </GridContainer>
    </DiscoverContainer>
  );
}

export default Discover;

const DiscoverContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 20px;
`;