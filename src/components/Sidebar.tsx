// Importamos el componente Transition de la biblioteca headless
import { Transition } from "@headlessui/react";

// Importamos Dispatch y SetStateAction de react paradefinir el tipo de las props.
import { Dispatch, SetStateAction } from 'react';

// Importamos el estilo del componente Sidebar.
import './styles/sidebar.css';

// Definimos el tipo de las props que recibe el componente Sidebar.
type Props = {
    setOpen: Dispatch<SetStateAction<boolean>>;
    Open: boolean
}

export default function Sidebar({ Open = false, setOpen }: Props) {
  return (
    <>
        {/* Componente Transition que maneja la animación de apertura y cierre del Sidebar */}
        <Transition show={Open}>
            {/* Contenido del Sidebar que se anima al entrar y salir */}
            <Transition.Child
                className="transition_child"
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
            >

                {/* Contenedor principal del Sidebar. */}
                <div 
                    id="sidebar"
                    className="sidebar_child"
                >
                    {/* Botón para cerrar el Sidebar. */}
                    <button
                        className="sidebar_hamburg"
                        onClick={() => setOpen(false) }
                        aria-expanded={Open}
                        aria-controls="sidebar"
                        aria-label="Open Menu"
                    >
                        <img src="images/xmark.svg" alt="Hamburg" className="sidebar_img" />
                    </button>
                    {/* Contendio del Sidebar que incluye elementos de navegación y el botón de solicitud de invitación.  */}
                    <div className="sidebar_content">
                        <li className="sidebar_menu_item_nav "><a href="#" className="sidebar_menu_item_link_nav  ">Home</a></li>
                        <li className="sidebar_menu_item_nav "><a href="#" className="sidebar_menu_item_link_nav  ">About</a></li>
                        <li className="sidebar_menu_item_nav "><a href="#" className="sidebar_menu_item_link_nav  ">Contact</a></li>
                        <li className="sidebar_menu_item_nav "><a href="#" className="sidebar_menu_item_link_nav  ">Blog</a></li>
                        <li className="sidebar_menu_item_nav "><a href="#" className="sidebar_menu_item_link_nav  ">Careers</a></li>
                        <a href="#" className="sidebar_request_btn">Request Invite</a>
                    </div>
                </div>
            </Transition.Child>

            {/* Transition que maneja el sidebar para que se cierre */}
            <Transition.Child>
                {/* Contiene el xmark de cierre del Sidebar */}
                <div 
                    className="sidebar_child_closed"
                    onClick={() => setOpen(false)}
                ></div>
            </Transition.Child>
        </Transition>
    </>
  )
}