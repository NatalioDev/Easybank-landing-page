//Importamos los componentes necesarios.
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import "./styles/header.css"
import { useState } from 'react'

export default function Header() {
// Utilizamos hook para gestionar el estado de la variable.
  const [Open, setOpen] = useState(false)

  return (
    <div>
      {/* Sección del encabezado */}
      <header className="header">
        {/* Logo */}
          <figure className='header_logo'>
            <img src="images/logo.svg" alt="logo image" className="header_logo_img"/>
          </figure>

          {/* Barra lateral, controlada por el estado 'Open' y la función 'setOpen' */}
          <Sidebar Open={Open} setOpen={setOpen} />

          {/* Barra de navegación */}
          <Nav />

          {/* Botón de hamburguesa para abrir la barra lateral */}
          <button
            className="header_hamburg"
            onClick={() => setOpen(true) }
            aria-expanded={Open}
            aria-controls="sidebar"
            aria-label="Open Menu"
        >
          <img src="images/icon-hamburger.svg" alt="Hamburg" />
        </button>

        {/* Botón para solicitar invitación */}
          <a href="#" className="header_request_btn">Request Invite</a>
        </header>
    </div>
  )
}
