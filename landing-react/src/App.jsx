import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Fondo from "./assets/fondo.jpg"
import Nosotros from "./components/Nosotros/Nosotros"
import Contacto from "./components/Contacto/Contacto";
import Soporte from "./components/Soporte/Soporte";

function App() {
 
const bgImagen = {
backgroundImage:`url(${Fondo})`,
backgroundRepeat:"no-repeat",
backgroundPosition:"bottom",
backgroundSize:"cover",
position:"relative",
imageRendering: "crisp-edges",




}
  return (
  <div style={bgImagen} className="overflow-hidden min-h-screen">
  <Navbar/>
  <Hero/>
  <Nosotros/>
  <Contacto/>
   <section id="soporte" className="scroll-mt-19">
      <Soporte/>
   </section>

   
   </div>
  )
}

export default App
