import { useEffect } from "react";
import "./styles/hero.css"
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// Importa la librería Styled Components
import styled from 'styled-components';
// import bgImage from 'images/bg-intro-desktop.svg';


//Creo estos estilos aca para resolver el problema de rutas de github pages
    const Container = styled.div `
    background: url(images/bg-intro-desktop.svg) , var(--very-light-gray),
    width: 100%;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-position-x: 43.4vw;
    background-position-y: -260px;
  
    @media screen and (max-width: 768px) {
      background: url(images/bg-intro-mobile.svg), var(--very-light-gray);
      background-repeat: no-repeat;
      background-position-x: right;
      background-position-y: -2rem;
    }
    `;

export default function Hero() {
    const controls = useAnimation();
    const controlsTitle = useAnimation();
    const controlsDescription = useAnimation();
    const controlsButton = useAnimation();

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({ 
                y: 90, 
                transition: { duration: 2 },  
                opacity:1,
            });
        };

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

        startAnimation();
        startAnimateTitle();
        startAnimateDescription();
        startAnimateButton();

    },[controls, controlsTitle, controlsDescription, controlsButton]);

  return (
    <Container>
        <div className="hero_wrapper">
            <AnimatePresence>
                <section className="hero_info">
                    <motion.h1
                        initial={{y:-100}}
                        animate={controlsTitle}
                        className="hero_info_title"
                    >Next generation digital banking
                    </motion.h1>
                    <motion.p 
                        className="hero_info_description "
                        initial={{y:100}}
                        animate={controlsDescription}
                    >
                    Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.
                    </motion.p>
                    <motion.div 
                        className="hero_btn"
                        initial={{y:100, opacity: 0}}
                        animate={controlsButton}
                    >
                        <a href="#" className="hero_request_btn">Request invite</a>
                    </motion.div>
                </section>
                <motion.div 
                    className="hero_image"
                    initial={{y:-150, opacity: 0 }}
                    animate={controls}
                >
                    <figure>
                        <img src="images/image-mockups.png" alt="pattern image" className="hero_image_img" />
                    </figure>
                </motion.div>
            </AnimatePresence>
        </div>
    </Container >
)}
