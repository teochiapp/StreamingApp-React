import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Para redireccionar

function HomeGrid({ moviesData }) {
  const navigate = useNavigate(); // Hook para navegar a diferentes rutas
  
  const bestRating = moviesData.filter((movie) => movie.puntuacionIMDB >= 8.5).slice(0, 7);

  const actionMovies = moviesData.filter((movie) => movie.generos.includes("Acción")).slice(0, 7);

  const dramaMovies = moviesData.filter((movie) => movie.generos.includes("Drama")).slice(0, 7);

  const crimenMovies = moviesData.filter((movie) => movie.generos.includes("Crimen")).slice(0, 7);

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.titulo}`);
  };

  return (
    <GridContainer>
      <GenreTitle>Best Rating</GenreTitle>
      <Grid>
        {bestRating.map((movie) => (
          <div key={movie.titulo} onClick={() => handleMovieClick(movie)}>
            <Portrait src={movie.fotoPortada} alt={movie.titulo} />
          </div>
        ))}
      </Grid>      
      <GenreTitle>Category - Action</GenreTitle>
      <Grid>
        {actionMovies.map((movie) => (
          <div key={movie.titulo} onClick={() => handleMovieClick(movie)}>
            <Portrait src={movie.fotoPortada} alt={movie.titulo} />
          </div>
        ))}
      </Grid>
      <GenreTitle>Category - Drama</GenreTitle>
      <Grid>
        {dramaMovies.map((movie) => (
          <div key={movie.titulo} onClick={() => handleMovieClick(movie)}>
            <Portrait src={movie.fotoPortada} alt={movie.titulo} />
          </div>
        ))}
      </Grid>
      <GenreTitle>Category - Crimen</GenreTitle>
      <Grid>
        {crimenMovies.map((movie) => (
          <div key={movie.titulo} onClick={() => handleMovieClick(movie)}>
            <Portrait src={movie.fotoPortada} alt={movie.titulo} />
          </div>
        ))}
      </Grid>
    </GridContainer>
  );
}

export default HomeGrid;

const Portrait = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  outline: 2px solid transparente;
  transición: outline 0.3s;
  &:hover {
    outline-color: white;
    cursor: pointer;
  }
`;

const GridContainer = styled.div`
  margin: 20px;
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

const GenreTitle = styled.div`
  text-align: start;
  font-size: 1.1em;
`;
