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
      <Filters />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div``;

const SearchContainer = styled.div`
  margin: 3px auto 20px auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ButtonsContainer = styled.div`
    svg {
      font-size: 20px;
      color: #54545d;
      margin: 0 10px;
      cursor: pointer;
    }
`;
