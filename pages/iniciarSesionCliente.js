import Cabecera from "../components/header.components"
import MenuNavegacionCliente from "../components/menu_navegacion_cliente.components"
import FormularioLogin from "../components/formulario_login.components"
import Footer from "../components/footer.components"

export default function IniciarSesion(){
    return <div> 
    <div id="general">
        <div>
            <header>
                <Cabecera/>  
            </header>
            <MenuNavegacionCliente/>
        </div>
        <h1 id="titulo">Iniciar Sesion</h1>
        <div id="formulario">
        <FormularioLogin />
        </div>
    </div>
    <Footer />
    </div>

}