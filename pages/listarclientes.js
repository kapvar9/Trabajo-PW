
import Cabecera from "../components/header.components"
import MenuNavegacionAdmin from "../components/menu_navegacion_admin.components"
import { Image } from "react-bootstrap"
import Footer from "../components/footer.components"

function ListarClientes () {
    return <div>
        <div>
            <header>
            <Cabecera/>  
            </header>
            <MenuNavegacionAdmin/>
        </div>
        <div className="mt-4 card">
            <div className="card-header bg-primary text-white">
                <h3>Detalle de <b>clientes</b></h3>
            </div>
            <div className="card-body">
                <div className="input-group mb-3 mt-4">
                    <input type="text" className="form-control" placeholder="Ingrese el término de búsqueda"/>
                    <button className="btn btn-secondary" type="button" id="button-addon2">Buscar</button>
                </div>
                <div className="mt-4">

                </div>
            </div>
            

        </div>
       
        <Footer/>
    </div>

}
export default ListarClientes