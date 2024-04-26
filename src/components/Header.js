import React from "react";
import Search from "../components/Search";
import Filters from "../components/Filters";
import styled from 'styled-components';
import { CgProfile } from "react-icons/cg";
import { GoLinkExternal } from "react-icons/go";
import { BiFullscreen } from "react-icons/bi";

function Header() {
    
    const handleLinkExternal = () => {
        const url = "https://www.stremio.com/";
        window.open(url, "_blank");
      };
    
      const handleFullScreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
      };

  return (
    <HeaderContainer>
      <SearchContainer>
        <Search />
        <ButtonsContainer>
          <GoLinkExternal onClick={handleLinkExternal} />
          <BiFullscreen onClick={handleFullScreen} />
          <CgProfile />
        </ButtonsContainer>
      </SearchContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div``;

const SearchContainer = styled.div`
  margin: 0;
  margin: 3px 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const ButtonsContainer = styled.div`
margin-left: 35vw;
    svg {
      font-size: 20px;
      color: #54545d;
      margin: 0 10px;
      cursor: pointer;
    }
`;
