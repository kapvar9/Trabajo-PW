import Cabecera1 from "../components/header2.components"
import Footer from "../components/footer.components"

function esperaCliente() {
    return <div>
        <div>
            <Cabecera1 />
        </div>

        <h1 className="tituloEspera">Por favor, espere un momento</h1>
        <h5 className="tituloEspera">Pronto se validará su cuenta</h5>
        <img id="imagenEspera" src="https://media.tenor.com/images/779781883952778b25974baa3cf7679c/tenor.gif" />
        <Footer />
    </div>
  }
  
  export default esperaCliente