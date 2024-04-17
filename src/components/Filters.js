import React from "react";
import styled from "styled-components";

function Filters() {
  return (
    <FiltersContainer>
      <div>
        <select id="filter1">
          <option value="option1">Movies</option>
          <option value="option2">Series</option>
          <option value="option3">Channels</option>
        </select>
      </div>
      <div>
        <select id="filter2">
          <option value="option1">Popular</option>
          <option value="option2">New</option>
          <option value="option3">Featured</option>
          <option value="option4">Public Domain</option>
        </select>
      </div>
      <div>
        <select id="filter3">
          <option value="option1">Action</option>
          <option value="option2">Fantasy</option>
          <option value="option3">Adventure</option>
        </select>
      </div>
    </FiltersContainer>
  );
}

export default Filters;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  select {
    color: white !important;
    background: linear-gradient(to right, #201f3a 30%, #201f3a 70%);
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 12px;
    border: 0;
    width: 100%;
    background: linear-gradient(to right, #201f3a 30%, #201f3a 70%);
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    color: #54545d;
    outline: 2px solid transparent;
  }

  select:focus {
    outline: 2px solid white;
  }

  select option {
    background: #0f0e1d;
    color: white;
  }

`;
