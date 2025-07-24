import React from 'react'
import { motion } from 'framer-motion'
import Mica from '../../assets/mica.jpg'
import Leo from '../../assets/leo.jpg'
import Flor from '../../assets/flor.jpg'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const Nosotros = () => {
  const cards = [
    {
      img: Mica,
      nombre: "Mica",
      rol: "Programadora Frontend",
      desc: "Apasionada por el diseño UI y la experiencia de usuario. Ama los videojuegos narrativos.",
    },
    {
      img: Leo,
      nombre: "Leo",
      rol: "Diseñador 3D",
      desc: "Crea mundos visuales y personajes únicos con mucho estilo indie.",
    },
    {
      img: Flor,
      nombre: "Flor",
      rol: "Guionista",
      desc: "Cree firmemente en contar historias que conmuevan a través del juego.",
    },
  ]

  return (
    <section id="nosotros" className="bg-white bg-opacity-80 py-20 px-6 text-center scroll-mt-36">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-purple-700 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nosotros
        </motion.h2>

        <motion.p
          className="text-gray-800 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Somos un equipo creativo y apasionado que busca generar impacto a través del arte y la tecnología.
        </motion.p>

        {/* Cards animadas con avatar */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-70 p-6 rounded-2xl shadow-lg text-center"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={card.img}
                alt={card.nombre}
               className="w-36 h-36 object-cover rounded-full mx-auto mb-6 shadow-xl ring-4 ring-purple-400 ring-offset-2 ring-offset-white transition-transform duration-300 hover:scale-105"

              />
              <h3 className="text-xl font-semibold text-purple-700">{card.nombre}</h3>
              <p className="text-sm text-purple-500 mb-2">{card.rol}</p>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Nosotros
