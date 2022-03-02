import Cabecera1 from "../components/header2.components"
import Footer from "../components/footer.components"

function esperaCliente() {
    return <div>
        <div>
            <Cabecera1 />
        </div>

        <h1 className="tituloEspera">Por favor, espere un momento</h1>
        <h5 className="tituloEspera">Pronto se validará su cuenta</h5>
        <img id="imagenEspera" src="https://i.pinimg.com/564x/db/c5/7b/dbc57b7afeed83e858137b975af91b3f.jpg" />
        <Footer />
    </div>
  }
  
  export default esperaCliente