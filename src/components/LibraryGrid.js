import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function ContentGrid({ moviesData }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate(); // Instancia de navigate

  useEffect(() => {
    if (moviesData.length > 0) {
      setSelectedMovie(moviesData[0]);
    }
  }, [moviesData]);

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.titulo}`);
  };

  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const storedLibrary = localStorage.getItem("library");
    if (storedLibrary) {
      setLibrary(JSON.parse(storedLibrary));
    }
  }, []);

  return (
    <GridContainer>
      <Grid>
        {library.map((movie) => (
          <div key={movie.titulo}>
            <Portrait
              src={movie.fotoPortada}
              alt={movie.titulo}
              onClick={() => handleMovieClick(movie)} // Dispara la navegación
            />
          </div>
        ))}
      </Grid>    
    </GridContainer>
  );
}

export default ContentGrid;

const Portrait = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  outline: 2px solid transparent;
  transition: outline 0.3s;
  &:hover {
    outline-color: white;
    cursor: pointer;
  }
`;

const GridContainer = styled.div`
  margin: 20px 20px;
  display: grid;
  gap: 20px;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
