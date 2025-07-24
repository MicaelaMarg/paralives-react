import React, { useState } from "react";
import Logo from "../../assets/logo.png";

const navbarlinks = [
  { id: 1, title: "Inicio", link: "/" },
  { id: 2, title: "Nosotros", link: "#nosotros" },
  { id: 3, title: "Contacto", link: "#contacto" },
  { id: 4, title: "Soporte", link: "#soporte" },
];

const navbarRedes = [
  {
    id: 1,
    icon: "bi bi-tiktok",
    link: "https://www.tiktok.com",
  },
  {
    id: 2,
    icon: "bi bi-instagram",
    link: "https://www.instagram.com",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <nav className="fixed top-0 left-0 bg-purple-800/80 backdrop-blur-md border-b border-purple-300/30 w-full z-50">


      <div className="flex justify-between items-center sm:px-12  sm:py-6 px-4 py-3">
        {/*logo navbar */}
        <div>
          <img src={Logo} alt="Logo del sitio" className="md:hidden w-[100px]" />
        </div>

        {/* Boton de hamburguesa*/}
        <button onClick={toggleMenu} className="text-white md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* navegacion desktop */}

        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4">
            {navbarlinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-white sm:text-lg text-sm hover:text-sky-300 transition-transform hover:scale-110 transform inline-block duration-300"
                  href={link.link}
                >

                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* navegacion redes desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                  href={link.link}
                >
                  <i
                    className={`${link.icon} sm:text-2x1 text-lg text-white hover:text-sky-200 transition-all duration-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu Movil*/}

      <div className={`absolute w-full bg-sky-800 bg-opacity-20 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >

        <ul className="flex flex-col px-4 py-2">
          {navbarlinks.map((link) => (
            <li key={link.id} className="py-2 text-center ">
              <a className="text-white hover:text-sky-200 " href={link.link} onClick={() => setIsOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex space-x-4 px-4 py-2 border-t border-pink-400 justify-center ">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                href={link.link} onClick={() => setIsOpen(false)}
              >
                <i
                  className={`${link.icon} text-lg text-white hover:text-sky-200`}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
