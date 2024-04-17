import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MenuItem({ title, icon, to }) {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <Item
      className="nav-item text-white my-1 d-flex justify-content-center"
      role="presentation"
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
    >
      <Link to={to} className="nav-link active" aria-current="page">
        <IconContainer>
          {icon}
          {showTitle && <span>{title}</span>}
        </IconContainer>
      </Link>
    </Item>
  );
}

export default MenuItem;

const Item = styled.li`
  a {
    color: white;
  }
`;

const IconContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 0px 20px 20px 20px;
  border-radius: 20px;
  span {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    color: #54545d;
    white-space: nowrap;
    border-radius: 4px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s linear;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  &:hover {
    background: rgba(84, 84, 93, 0.3);
  }
`;
