import Nav from "./Nav";
import "./styles/header.css"
// Importa la librería Styled Components
import styled from 'styled-components';

export default function Header() {

  const MenuIcon = styled.span `
  @media screen and (max-width: 880px) {
  margin-left: 75px;
  margin-right: -75px;
  width: 35px;
  height: 25px;
  cursor: pointer;
  background-image: url(images/icon-hamburger.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: all .3s ease-in-out;
  }`;

  const Header = styled.header `
    width: 100%;
    max-width: 1440px;
    height: 80px;
    padding: 0 10.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    z-index: 10;
    position: absolute;
  @media screen and (max-width: 880px) {
    position: relative;
  }
  `

  return (
    <div>
      <Header>
          <figure className='header_logo'>
            <img src="images/logo.svg" alt="logo image" className="header_logo_img"/>
          </figure>
          <Nav />
          <MenuIcon></MenuIcon>
          <a href="#" className="header_request_btn">Request Invite</a>
        </Header>
    </div>
  )
}
