// Importamos Hooks.
import { useEffect } from "react";

// Importamos estilos. 
import "./styles/hero.css"

// Importamos Framer-motion.
import { motion, useAnimation, AnimatePresence } from 'framer-motion';



export default function Hero() {
    // Creamos instancias de control para animaciones de diferentes elementos
    const controls = useAnimation();
    const controlsTitle = useAnimation();
    const controlsDescription = useAnimation();
    const controlsButton = useAnimation();

    // Utilizamos el hook para iniciar las animaciones cuendo el componente se monta.
    useEffect(() => {
        //Función asincrónica para iniciar la animación del componente principal.
        const startAnimation = async () => {
            await controls.start({ 
                y: 90, 
                transition: { duration: 2 },  
                opacity:1,
            });
        };

        // Funciones asincrónicas para iniciar las animaciones de otros elemnetos.
        const startAnimateTitle = async () => {
            await controlsTitle.start({
                y:0,
                transition: {duration:2}
            })
        };

        const startAnimateDescription = async () => {
            await controlsDescription.start({
                y:0,
                transition: {duration:1}
            })
        };

        const startAnimateButton = async () => {
            await controlsButton.start({
                y:0,
                transition: {duration: 2, repeat: 2, repeatType: 'reverse', ease: 'easeInOut' },
                opacity:1,
            })
        };

        // Llamamos a las funciones para iniciar las animaciones.
        startAnimation();
        startAnimateTitle();
        startAnimateDescription();
        startAnimateButton();

    },[controls, controlsTitle, controlsDescription, controlsButton]);

  return (
        <section className="hero">
            <div className="hero_wrapper"> 
                {/* AnimatePresence para gestionar la presencia de elementos animados */}
                <AnimatePresence>
                        {/* Elemento h1 animado */}
                        <motion.h1
                            initial={{y:-100}}
                            animate={controlsTitle}
                            className="hero_info_title"
                        >Next generation digital banking
                        </motion.h1>

                        {/* Elemento p animado */}
                        <motion.p 
                            className="hero_info_description "
                            initial={{y:100}}
                            animate={controlsDescription}
                        >
                        Take your financial life online. Your Easybank account will be a one-stop-shop
                        for spending, saving, budgeting, investing, and much more.
                        </motion.p>

                        {/* Elemento div para el botón animado */}
                        <motion.div 
                            className="hero_btn"
                            initial={{y:100, opacity: 0}}
                            animate={controlsButton}
                        >
                            <a href="#" className="hero_request_btn">Request invite</a>
                        </motion.div>

                            {/* Imagenes de fondo y principal animadas */}
                            <img src="images/bg-intro-desktop.svg" alt="" className="hero_bg" />
                            <motion.img 
                                src="images/image-mockups.png" 
                                alt="pattern image" 
                                className="hero_image"
                                initial={{y:-150, opacity: 0 }}
                                animate={controls} 
                            />
                </AnimatePresence>
            </div>
        </section>
)}
