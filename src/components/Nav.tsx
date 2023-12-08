import './styles/nav.css'

export default function Nav() {


  return (
    <>
        <nav className="header_nav">
            <ul className="header_menu_nav">
                <li className="header_menu_item_nav "><a href="#" className="header_menu_item_link_nav link_hover ">Home</a></li>
                <li className="header_menu_item_nav "><a href="#" className="header_menu_item_link_nav link_hover ">About</a></li>
                <li className="header_menu_item_nav "><a href="#" className="header_menu_item_link_nav link_hover ">Contact</a></li>
                <li className="header_menu_item_nav "><a href="#" className="header_menu_item_link_nav link_hover ">Blog</a></li>
                <li className="header_menu_item_nav "><a href="#" className="header_menu_item_link_nav link_hover ">Careers</a></li>
            </ul>
        </nav>
    </>
  )
}