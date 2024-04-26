import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Library from "./pages/Library";
import Calendar from "./pages/Calendar";
import SidebarMenu from "./components/SidebarMenu";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <SidebarMenu />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/library" element={<Library />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  background: linear-gradient(to bottom, #0f0e1d, #121024);
  color: white;
  min-height: 100vh;
`;
