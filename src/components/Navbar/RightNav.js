import * as React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/" >
            About
        </Link>
      </li>
      <li>
        <Link to="../writing" >
            Writing
        </Link>
      </li>
      <li>
        <Link to="../projects" >
            Projects
        </Link>
      </li>
      <li>
        <Link to="../food" >
            Food
        </Link>
      </li>
      <li></li>
    </Ul>
  )
}

export default RightNav