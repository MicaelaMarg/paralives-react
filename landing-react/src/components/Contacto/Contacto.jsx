
import React from 'react';
import ContactoImg from '../../assets/contacto.png' 
const Contacto = () => {
  return (
    <section
      id="contacto"
      className="bg-gray-100 py-20 px-6"
      style={{ scrollMarginTop: '80px' }} // para evitar que el navbar fijo tape el inicio
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Contacto</h2>

        <img
          src={ContactoImg}
          alt="Ilustración contacto"
          className="mx-auto w-2/3 max-w-md"
        />
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="p-3 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="p-3 rounded border border-gray-300"
          />
          <textarea
            placeholder="Tu mensaje"
            rows="4"
            className="p-3 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;

