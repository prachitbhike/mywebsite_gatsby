import * as React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;

  .name {
    padding-top: 0.5rem;
    font-size: 2rem;
    font-family: Titillium Web;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="name">
        Prachit Bhike
      </div>
    </Nav>
  )
}

export default Navbar