import RegistroP2 from "../components/registro_paso2.components"
import Cabecera1 from "../components/header2.components"

import Footer from "../components/footer.components"

function registrarClienteP2() {

    const guardarProyectoLS2 = (txtCelularCliente, txtCorreoCliente,txtPasswordCliente) =>{
        const cliente2 = {
            celular:txtCelularCliente,
            correo: txtCorreoCliente,
            password: txtPasswordCliente
        }
        //Se guardar cliente en local storage
        localStorage.setItem("clientes2",JSON.stringify(cliente2))
    }


    return <div>
        <header>
                <Cabecera1/>  
            </header>
    
        <RegistroP2 onGuardar ={guardarProyectoLS2}/>
        <Footer />
        </div>
  }
 
  
  export default registrarClienteP2