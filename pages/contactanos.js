import Footer from "../components/footer.components"
import Cabecera1 from "../components/header2.components"
function Contactanos() {
    return <div>
        <header>
                <Cabecera1/>  
        </header>
        <h1 id="tituloC">Contáctanos</h1>
        <h3>Nos puedes contactar a través de estos medios:</h3>
        <ul className="list-group">
            <li className="list-group-item">Teléfono: 977-104-952</li>
            <li className="list-group-item">Correo: bitcoin@bitcoin.com</li>
          
        </ul>
        <Footer />
    <div></div>
    </div>
  }
  
  export default Contactanos