import { Transition } from "@headlessui/react";
import { Dispatch, SetStateAction } from 'react';

import './styles/sidebar.css';

type Props = {
    setOpen: Dispatch<SetStateAction<boolean>>;
    Open: boolean
}

export default function Sidebar({ Open = false, setOpen }: Props) {
  return (
    <>
        <Transition show={Open}>
            <Transition.Child
                className="transition_child"
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
            >
                <div 
                    id="sidebar"
                    className="sidebar_child"
                >
                    <button
                        className="sidebar_hamburg"
                        onClick={() => setOpen(false) }
                        aria-expanded={Open}
                        aria-controls="sidebar"
                        aria-label="Open Menu"
                    >
                        <img src="images/xmark.svg" alt="Hamburg" className="sidebar_img" />
                    </button>
                    <div className="sidebar_content">
                        <li className="sidebar_menu_item_nav "><a href="#" className="sidebar_menu_item_link_nav link_hover ">Home</a></li>
                        <li className="sidebar_menu_item_nav "><a href="#" className="sidebar_menu_item_link_nav link_hover ">About</a></li>
                        <li className="sidebar_menu_item_nav "><a href="#" className="sidebar_menu_item_link_nav link_hover ">Contact</a></li>
                        <li className="sidebar_menu_item_nav "><a href="#" className="sidebar_menu_item_link_nav link_hover ">Blog</a></li>
                        <li className="sidebar_menu_item_nav "><a href="#" className="sidebar_menu_item_link_nav link_hover ">Careers</a></li>
                        <a href="#" className="sidebar_request_btn">Request Invite</a>
                    
                    </div>
                </div>
            </Transition.Child>
            <Transition.Child>
                <div 
                    className="sidebar_child_closed"
                    onClick={() => setOpen(false)}
                ></div>
            </Transition.Child>
        </Transition>
    </>
  )
}