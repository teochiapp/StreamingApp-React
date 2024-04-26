import React from 'react'
import styled from "styled-components";
import Header from "../components/Header";
import Filters from "../components/Filters";
import moviesData from "./data/moviesData";
import LibraryGrid from '../components/LibraryGrid';

function Library() {

  return (
    <LibraryContainer>
      <Header />
      <Filters />
      <GridContainer>
        <LibraryGrid moviesData={moviesData} />
      </GridContainer>
    </LibraryContainer>
  )
}

export default Library

const LibraryContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;


const GridContainer = styled.div`
  display: grid;
  gap: 20px;
`;
