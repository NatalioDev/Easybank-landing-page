import Nav from "./Nav";
import "./styles/header.css"

export default function Header() {
  return (
    <div>
      <header className="header">
          <figure className='header_logo'>
            <img src="images/logo.svg" alt="logo image" className="header_logo_img"/>
          </figure>
          <Nav />
          <span className="menu_icon" id="menu_icon"></span>
          <a href="#" className="header_request_btn">Request Invite</a>
        </header>
    </div>
  )
}
