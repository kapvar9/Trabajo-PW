import Cabecera from "../components/header.components"
import Footer from "../components/footer.components"

function CerrarCliente() {
    return <div>
        <div>
            <Cabecera />
        </div>
        <h1 id="titulo">Acción denegada</h1>     
        <div id="cardN" className="card-body">
                    <p className="card-text">Tienes que volver a loggearte para poder realizar acciones en tu cuenta.</p>
                    <a href=".." className="btn btn-primary">Página Principal</a>
        </div> 
        <Footer />
    
    </div>
}
export default CerrarCliente