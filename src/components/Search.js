import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Search or paste link..." />
      <button>
        <AiOutlineSearch />
      </button>
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  display: flex;
  max-width: 230px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: linear-gradient(to right, #201f3a 30%, #201f3a 70%);
  border-radius: 50px;
  position: relative;

  button {
    color: white;
    border-radius: 50%;
    border: 0;
    background: linear-gradient(to right, #201f3a 30%, #201f3a 70%);
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    position: absolute;
    left: 85%;
    color: #54545d;
  }

  svg {
    font-size: 1.3em;
  }

  button:hover {
    color: #fff;
    background-color: #1a1a1a;
    transform: translateY(-3px);
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
  }

  input {
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 12px;
    padding: 8px 46px 8px 26px;
    font-weight: 600;
  }
`;
