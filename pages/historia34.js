import Footer from "../components/footer.components"
import MenuNavegacionAdmin from "../components/menu_navegacion_admin.components"
import CerrarSesionBoton from "../components/cerrarsesion_boton.components"
import Editar from "../components/Editar.components"
import { Image } from "react-bootstrap"

function Historia34() {
    const CerrarHandler = () => {
        location.href = "/"
    }
    return <div>
        <div className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
            {/**Agregar cabecera */}
            <header className="container-fluid d-flex align-items-center">
                <div className="d-flex align-items-center fs-4 text-white mb-0">
                <Image src="/Images/LogoBitcoin.png" className="logo me-3" width="46" height="38" alt="Bootstrap"/>
                    <h1>Crypto-nita</h1>
                </div>
                <div className="ms-auto">
                    {/**Se llama al componente botones */}
                    <CerrarSesionBoton cerrar={CerrarHandler} />
                </div>

            </header>
        </div>
        <div>
            <MenuNavegacionAdmin />
        </div>
        
        <div className="mt-4">
            <div className="row mt-100 w-100">
                <div>
                <Editar />
                </div>
            </div>
            <Footer />
        </div>
    </div>
}

export default Historia34
