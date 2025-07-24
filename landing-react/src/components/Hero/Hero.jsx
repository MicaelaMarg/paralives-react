import React from 'react'
import Personaje from "../../assets/personaje.png"
import Logo from "../../assets/logo.png"
import { motion } from "framer-motion";
import {slipeUp,slipeInFromSide} from '../../utility/animacion'

import Fondo from "../../assets/fondo.jpg"




const Hero = () => {

    
    return (
 <section
      className='mt-36 min-h-screen'
      style={{
        backgroundImage: `url(${Fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        imageRendering: "crisp-edges",
      }}
    >

        <section className='mt-36'>
            <div className='grid grid-cols-1 md:grid-cols-2'>

                {/*Texto y descripcion */}

                <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
                    <motion.img src={Logo} alt="Logo del Juego" 
                    variants={slipeUp (0.2)}
                    initial="initial"
                    animate="animate"
                    
                    />
                    <motion.p 
                    className="py-12 text-white"
                    variants={slipeUp (0.3)}
                    initial="initial"
                    animate="animate"
                    >
                        "Paralives" es un juego de simulación de vida en desarrollo que ofrece una experiencia parecida a Los Sims, donde los jugadores pueden crear personajes, construir casas detalladamente y controlar todos los aspectos de la vida diaria de sus habitantes. A diferencia de Los Sims, se destaca por ofrecer una herramienta de construcción más libre y flexible, además de un estilo artístico encantador tipo "indie". El juego busca una experiencia más realista y abierta, con un enfoque en la personalización y la comunidad.
                    </motion.p>

                    <motion.div
                     className='flex justify-center gap-4'>
                        <a className='bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer'>
                            Jugar ahora
                            <i className="bi bi-controller text-xl ml-2"></i>
                        </a>

                        <a className='text-white flex items-center cursor-pointer'>
                            Ver GamePlay 
                            <i className="bi bi-youtube text-xl ml-2"></i>
                        </a>


                    </motion.div>

                </div>

                        {/*Imagen*/}
                <motion.div className='p-6 sm:p-8 md:p-12 lg:p-2 xl:p-20'
                 variants={slipeInFromSide("right",0.5)}
                    initial="initial"
                    animate="animate"
                    >
                    <img
                        src={Personaje}
                        alt="Personaje del juego"
                        className="w-full h-full object-contain"
                    />

                </motion.div>

            </div>
        </section>
</section>
    )
}
export default Hero;
  