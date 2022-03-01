
import RegistroP1 from "../components/registro_paso1.components"
import Cabecera1 from "../components/header2.components"

import Footer from "../components/footer.components"

function registrarClienteP1() {

    const guardarProyectoLS = (txtNombreCliente, txtApellidosCliente,txtDniCliente) =>{
        const cliente = {
            nombre:txtNombreCliente,
            apellidos: txtApellidosCliente,
            dni: txtDniCliente
        }
        //Se guardar cliente en local storage
        localStorage.setItem("clientes",JSON.stringify(cliente))
        location.href = "/registrarClienteP2"
    }

    return <div>
        <header>
                <Cabecera1/>  
            </header>
        <RegistroP1 onGuardar ={guardarProyectoLS}/>
        <Footer />
        </div>
  }
 
  
  export default registrarClienteP1