import Nav from "./Nav";
import "./styles/header.css"
// Importa la librería Styled Components
import styled from 'styled-components';

export default function Header() {

  const MenuIcon = styled.span `
  @media screen and (max-width: 880px) {
  margin-left: 75px;
  margin-right: -50px;
  width: 35px;
  height: 25px;
  cursor: pointer;
  background-image: url(images/icon-hamburger.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: all .3s ease-in-out;
  }`;


  return (
    <div>
      <header className="header">
          <figure className='header_logo'>
            <img src="images/logo.svg" alt="logo image" className="header_logo_img"/>
          </figure>
          <Nav />
          <MenuIcon></MenuIcon>
          <a href="#" className="header_request_btn">Request Invite</a>
        </header>
    </div>
  )
}
