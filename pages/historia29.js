import Footer from "../components/footer.components"
import MenuNavegacionCliente from "../components/menu_navegacion_cliente.components"
import CerrarSesionBoton from "../components/cerrarsesion_boton.components"
import DireccionBilletera from "../components/direccionbilletera.components"
import { Image } from "react-bootstrap"

function Historia29() {

    const guardarBilletera = (txtDireccionBilletera) =>{
        const billetera = {
            billetera:txtDireccionBilletera,            
        }
        
        localStorage.setItem("billetera",JSON.stringify(billetera))
    }
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
            <MenuNavegacionCliente />
        </div>
        <div>
            <span id="texto 1" className="ejemplo1">
                <font face="Cascadia Code" color="black" size="40">Operación de compra ## </font>
                <div><font face="Cascadia Code" color="black" size="40">Paso 1 de 3</font></div>
            </span>
        </div>
        <div className="mt-4">
            <div className="row mt-100 w-100">
                <div>
                    <DireccionBilletera onGuardar ={guardarBilletera}/>
                </div>
            </div>
            <Footer />
        </div>
    </div>
}

export default Historia29
