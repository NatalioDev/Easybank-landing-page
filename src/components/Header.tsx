import Nav from "./Nav";
import Sidebar from "./Sidebar";
import "./styles/header.css"
import { useState } from 'react'

// Importa la librería Styled Components
// import styled from 'styled-components';

export default function Header() {

  const [Open, setOpen] = useState(false)

  return (
    <div>
      <header className="header">
          <figure className='header_logo'>
            <img src="images/logo.svg" alt="logo image" className="header_logo_img"/>
          </figure>
          <Sidebar Open={Open} setOpen={setOpen} />
          <Nav />
          <button
            className="header_hamburg"
            onClick={() => setOpen(true) }
            aria-expanded={Open}
            aria-controls="sidebar"
            aria-label="Open Menu"
        >
          <img src="images/icon-hamburger.svg" alt="Hamburg" />
        </button>
          <a href="#" className="header_request_btn">Request Invite</a>
        </header>
    </div>
  )
}
