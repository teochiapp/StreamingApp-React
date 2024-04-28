import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineCompass, AiOutlineHome } from "react-icons/ai";
import { LuLibrary } from "react-icons/lu";
import MenuItem from "./MenuItem";
import styled from "styled-components";

function SidebarMenu() {
  return (
    <SidebarContainer>
      <img src="stremioLogo.png" alt="Stremio Logo" />
      <ul className="nav flex-column" id="parentMenu" role="tablist">
        <MenuItem title="Home" icon={<AiOutlineHome />} to="/" />
        <MenuItem title="Discover" icon={<AiOutlineCompass />} to="/discover" />
        <MenuItem title="Library" icon={<LuLibrary />} to="/library" />
        <MenuItem title="Calendar" icon={<BsCalendar3 />} to="/calendar" />
      </ul>
    </SidebarContainer>
  );
}

export default SidebarMenu;

const SidebarContainer = styled.div`
  flex: 0 0 auto;
  background-color: #121024;

  img {
    width: 100%;
    object-fit: contain;
    height: 60px;
    margin: 20px 0;
  }

  svg {
    color: #54545d;
    font-size: 25px;
    margin: 3px 0px;
  }

  span {
    font-size: 12px;
    font-weight: 700;
  }
`;
