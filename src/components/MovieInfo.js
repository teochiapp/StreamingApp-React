import React, { useState } from "react";
import styled from "styled-components";
import { BiLibrary, BiCameraMovie } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

function MovieInfo({ selectedMovie }) {
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  if (!selectedMovie) {
    return <p>Sin película</p>; // Si no hay película seleccionada, retorna null para no renderizar nada
  }

  const {
    titulo,
    duracion,
    añoPublicacion,
    descripcionCorta,
    puntuacionIMDB,
    fotoPortada,
    generos,
    director,
    cast,
    trailer,
  } = selectedMovie;

  const handleWatchTrailer = () => {
    setShowTrailerModal(true);
  };

  const handleCloseTrailerModal = () => {
    setShowTrailerModal(false);
  };

  const handleShowDirector = () => {
    // Concatenamos el nombre del director a la URL de búsqueda de Google
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      director
    )}`;
    // Abrir una nueva ventana del navegador con la URL de búsqueda de Google
    window.open(googleSearchUrl, "_blank");
  };

  const handleShowCast = (index) => {
    const actor = cast[index];
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      actor
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  const handleClickImbd = () => {
    const googleSearchUrl = `https://www.google.com/search?q=${titulo} imbd`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <InfoContainer fotoPortada={fotoPortada}>
      <BlurOverlay />
      <ContentWrapper>
        <Titulo large={titulo.length <= 12}>{titulo}</Titulo>
        <Row>
          <p>{duracion}</p>
          <p>{añoPublicacion}</p>
          <p onClick={handleClickImbd}>
            {puntuacionIMDB}
            <LogoImbd src="imbd.svg" alt="imbd-logo"/>
          </p>
        </Row>
        <Descripcion>{descripcionCorta}</Descripcion>
        <TitleBox>Generos</TitleBox>
        <LabelBox>
          {generos.map((genero, index) => (
            <Box key={index}>{genero}</Box>
          ))}
        </LabelBox>
        <TitleBox>Director</TitleBox>
        <Box onClick={handleShowDirector}>{director}</Box>
        <TitleBox>Cast</TitleBox>
        <LabelBox>
          {cast.map(
            (
              actor,
              index
            ) => (
              <Box key={index} onClick={() => handleShowCast(index)}>
                {actor}
              </Box> 
            )
          )}
        </LabelBox>
        <ButtonsContainer>
          <Button>
            <BiLibrary />
          </Button>
          <Button onClick={handleWatchTrailer}>
            <BiCameraMovie />
          </Button>
          <TextButton>
            <span>Show</span>
            <PlayButton>
              <BsFillPlayFill />
            </PlayButton>
          </TextButton>
        </ButtonsContainer>
      </ContentWrapper>
      {showTrailerModal && (
        <TrailerModal>
          <iframe
            width="1080"
            height="600"
            src={trailer} // URL del tráiler de YouTube
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <CloseButton onClick={handleCloseTrailerModal}>
            <CgClose />
          </CloseButton>
        </TrailerModal>
      )}
    </InfoContainer>
  );
}

export default MovieInfo;

const InfoContainer = styled.div`
  position: relative;
  height: 100%;
  min-width: 22vw;
  min-height: 100vh;
  max-height: 800px !important;
  background-image: url(${(props) => props.fotoPortada});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  top: -125px;

  h2 {
    margin: 10px 0;
    font-size: 40px;
  }
`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  color: white; /* Color del texto */
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  p {
    width: 33.333%;
    font-weight: 700;
    font-size: 0.8em;
  }
`;

const Descripcion = styled.div`
  font-size: 12px;
  text-align: start;
`;

const Titulo = styled.div`
  font-size: ${(props) => (props.large ? "40px" : "20px")};
  font-family: "Orbitron", sans-serif;
  margin: 20px 0;
`;

const LabelBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin: 5px 0;
  gap: 10px;
`;

const Box = styled.div`
  margin-bottom: 5px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.13);
  color: white;
  font-size: 12px;
  width: min-content;
  min-width: 100px;
  cursor: pointer;
  border-radius: 20px;
  padding: 6px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.div`
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-align: start;
  margin: 15px 0 3px;
`;

const LogoImbd = styled.img`
  max-width: 25px;
  position: relative;
  top: -2px;
  left: 3px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const Button = styled.div`
  padding: 6px;
  margin: 0px 3px;
  background: rgba(255, 255, 255, 0.13);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  svg {
    font-size: 1.2em;
  }

  &:hover {
    background: #22b365;
  }
`;

const TextButton = styled.div`
  margin: 0px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  max-width: 160px;
  background: rgba(255, 255, 255, 0.11);

  svg {
    font-size: 1.2em;
  }

  &:hover {
    background: #22b365;
  }

  span {
    margin-left: 30%;
    font-size: 0.8em;
  }

  BsFillPlayFill {
    background: red;
  }
`;

const PlayButton = styled(Button)`
  background: #22b365;
  padding: 10px;

  svg {
    font-size: 1.4em;
  }
`;

const TrailerModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.9);
  padding: 0px;
  border-radius: 10px;
  z-index: 9999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
