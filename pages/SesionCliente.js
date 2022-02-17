import Cabecera from "../components/header.components"
import MenuNavegacionCliente from "../components/menu_navegacion_cliente.components"
import FormularioLogin from "../components/formulario_login.components"
import Footer from "../components/footer.components"

function IniciarSesion(){
    //funcion que permita loggearse
     const loginHandler = (username,password) =>{
        if (username == "admin" && password == "123") {
          location.href = "../mainAdmin"
        }else {
          location.href = "../mainCliente"
        }
      }
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
        <FormularioLogin onLogin = {loginHandler}/>
        </div>
    </div>
    <Footer />
    </div>

}
export default IniciarSesion