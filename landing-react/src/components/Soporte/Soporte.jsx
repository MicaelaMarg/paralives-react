import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import soporte from '../../assets/soporte.png'

// Tarjetas principales del carrusel
const supportCards = [
  {
    title: 'Preguntas frecuentes',
    desc: 'Respuestas rápidas a dudas comunes de los jugadores.',
  },
  {
    title: 'Reportar error',
    desc: 'Encontraste un bug o algo no funciona bien. ¡Contanos!',
  },
  {
    title: 'Contacto directo',
    desc: 'Escribinos por email, WhatsApp o redes sociales.',
  },
]

// Cards de contacto extra
const soporteExtra = [
  {
    icon: "bi bi-whatsapp",
    title: "WhatsApp",
    desc: "Escribinos rápido por chat.",
    link: "https://wa.me/5491123456789",
  },
  {
    icon: "bi bi-geo-alt",
    title: "Ubicación",
    desc: "Buenos Aires, Argentina",
    link: "https://goo.gl/maps/xxxxx",
  },
  {
    icon: "bi bi-envelope",
    title: "Email",
    desc: "soporte@paralives.com",
    link: "mailto:soporte@paralives.com",
  },
]

const Soporte = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-800 to-purple-900 text-white py-20 px-4" id="soporte">
      {/* Título */}
      <motion.h2
        className="text-4xl text-center font-bold mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Centro de Soporte
          <img
                src={soporte}
                alt="soporte"
               className="mx-auto w-2/3 max-w-md"

              />
      </motion.h2>
    

      {/* Carrusel de tarjetas */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="max-w-6xl mx-auto"
      >
        {supportCards.map((card, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-purple-700 p-6 rounded-xl shadow-lg h-full flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-sm text-white/90">{card.desc}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Cards de contacto extra */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
        {soporteExtra.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600/80 hover:bg-purple-500 transition-colors duration-300 text-white rounded-2xl p-6 shadow-xl text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <i className={`${item.icon} text-4xl mb-4`}></i>
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-white/90">{item.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Soporte
