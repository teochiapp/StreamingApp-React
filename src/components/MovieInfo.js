import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiLibrary, BiCameraMovie } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { BsCalendar3 } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MovieInfo({ selectedMovie }) {
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleWatchTrailer = () => {
    setShowTrailerModal(true);
  };

  const handleCloseTrailerModal = () => {
    setShowTrailerModal(false);
  };

  const handleShowDirector = () => {
    // Concatenamos el nombre del director a la URL de búsqueda de Google
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      selectedMovie.director
    )}`;
    // Abrir una nueva ventana del navegador con la URL de búsqueda de Google
    window.open(googleSearchUrl, "_blank");
  };

  const handleShowCast = (actor) => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      actor
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  const handleClickImbd = () => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      selectedMovie.titulo
    )} imbd`;
    window.open(googleSearchUrl, "_blank");
  };

  const handleAddToLibrary = () => {
    const library = JSON.parse(localStorage.getItem("library")) || [];

    const existingIndex = library.findIndex(
      (movie) => movie.titulo === selectedMovie.titulo
    );

    if (existingIndex !== -1) {
      const updatedLibrary = [...library];
      updatedLibrary.splice(existingIndex, 1);
      localStorage.setItem("library", JSON.stringify(updatedLibrary));
      setNotification(`Deleted from the library.`);
    } else {
      const updatedLibrary = [...library, selectedMovie];
      localStorage.setItem("library", JSON.stringify(updatedLibrary));
      setNotification(`Added to the Library`);
    }
  };

  const handleAddCalendar = () => {
    setShowDatePicker(true);
  };

  const handleSaveDates = () => {
    const calendarEvents = JSON.parse(localStorage.getItem("events")) || [];

    const event = {
      titulo: selectedMovie.titulo,
      startDate,
      endDate,
    };

    calendarEvents.push(event);

    localStorage.setItem("events", JSON.stringify(calendarEvents));
    setNotification(`Event added to the calendar.`);

    setShowDatePicker(false); // Cierra el modal
  };

  return (
    <InfoContainer fotoPortada={selectedMovie.fotoPortada}>
      <BlurOverlay />
      <ContentWrapper>
        <Titulo large={selectedMovie.titulo.length <= 12}>
          {selectedMovie.titulo}
        </Titulo>
        <Row>
          <p>{selectedMovie.duracion}</p>
          <p>{selectedMovie.añoPublicacion}</p>
          <p onClick={handleClickImbd}>
            {selectedMovie.puntuacionIMDB}
            <LogoImbd src="imbd.svg" alt="imbd-logo" />
          </p>
        </Row>
        <Descripcion>{selectedMovie.descripcionCorta}</Descripcion>
        <TitleBox>Generos</TitleBox>
        <LabelBox>
          {selectedMovie.generos.map((genero, index) => (
            <Box key={index}>{genero}</Box>
          ))}
        </LabelBox>
        <TitleBox>Director</TitleBox>
        <Box onClick={handleShowDirector}>{selectedMovie.director}</Box>
        <TitleBox>Cast</TitleBox>
        <LabelBox>
          {selectedMovie.cast.map((actor, index) => (
            <Box key={index} onClick={() => handleShowCast(actor)}>
              {actor}
            </Box>
          ))}
        </LabelBox>
        <ButtonsContainer>
          <Button onClick={handleAddToLibrary}>
            <BiLibrary />
          </Button>
          <Button onClick={handleWatchTrailer}>
            <BiCameraMovie />
          </Button>
          {/* Botón para agregar al calendario */}
          <Button onClick={handleAddCalendar}>
            <BsCalendar3 />
          </Button>

          {/* Notificación emergente */}
          {notification && (
            <Notification show={true}>
              {notification}
              <CloseButtonNotif onClick={() => setNotification("")}>
                <CgClose />
              </CloseButtonNotif>
            </Notification>
          )}

          {/* Modal para seleccionar fechas */}
          {showDatePicker && (
            <DatePickerModal>
              <CloseButtonNotif onClick={() => setShowDatePicker(false)}>
                <CgClose />
              </CloseButtonNotif>
              <h3>Select Dates</h3>
              <div>
                <label>Start Date:</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </div>
              <div>
                <label>End Date:</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </div>
              <SaveButton onClick={handleSaveDates}>Save</SaveButton>
            </DatePickerModal>
          )}
          <TextButton>
            <span>Show</span>
            <PlayButton>
              <BsFillPlayFill />
            </PlayButton>
          </TextButton>
        </ButtonsContainer>
        {notification && (
          <Notification show={true}>
            {notification}
            <CloseButtonNotif onClick={() => setNotification("")}>
              <CgClose />
            </CloseButtonNotif>
          </Notification>
        )}
      </ContentWrapper>
      {showTrailerModal && (
        <TrailerModal>
          <iframe
            width="1080"
            height="600"
            src={selectedMovie.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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

const Notification = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 20px;
  left: 35%;
  padding: 10px;
  pading-right: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 5px;
  z-index: 999;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  transform: translateY(${(props) => (props.show ? 0 : 20)}px);
  transition: transform 0.3s ease-in-out;
`;

const CloseButtonNotif = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20x;
  cursor: pointer;
`;

const DatePickerModal = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  color: white;
  z-index: 9999;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 20px;
    padding: 5px 0;
  }


  div input {
    margin-left: 5px;
    background: rgba(255, 255, 255, 0.11);
    color: white;
    border-radius: 8px;
    padding: 7px;
    border-color: white;
  }

  div {
    margin-bottom: 5px;
  }

  svg {
    font-size: 19px;
  }
`;

const SaveButton = styled.div`
  background: #22b365;
  color: white;
  font-size: 14px;
  padding: 8px;
  border-radius: 5px;
`;
