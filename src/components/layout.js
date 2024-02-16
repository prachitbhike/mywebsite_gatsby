import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navLinks,
    navLinkItem,
    navLinkName,
    navLinkText
  } from './layout.module.css'

  const Layout = ({ children }) => {
    return (
      <div className={container}>
        <Link to="/" className={navLinkName}>
                Prachit Bhike
        </Link>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/writing" className={navLinkText}>
                Writing
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/projects" className={navLinkText}>
                Projects
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/food" className={navLinkText}>
                Food
              </Link>
            </li>
          </ul>
        </nav>
        <br></br>
        <main>
          {children}
        </main>
      </div>
    )
  }
  
  export default Layout