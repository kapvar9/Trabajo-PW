import RegistroP2 from "../components/registro_paso2.components"
import Cabecera1 from "../components/header2.components"

import Footer from "../components/footer.components"

function registrarClienteP2() {

    

    const cliente = require('./registrarClienteP1');
    const Nombre = cliente.nombre
    const Apellidos = cliente.apellidos
    const Dni = cliente.dni

    const guardarProyectoLS2 = (nombre,apellidos,dni,txtCelularCliente, txtCorreoCliente,txtPasswordCliente) =>{
        const cliente2 = {
            //const an = localStorage.getItem("clientes"),
            nombre1 :nombre,
            apellido1 :apellidos,
            dni1:dni,
            celular:txtCelularCliente,
            correo: txtCorreoCliente,
            password: txtPasswordCliente
        }
        //Se guardar cliente en local storage
        //localStorage.setItem("clientes2",JSON.stringify(cliente2))
        const mycliente2 = JSON.stringify(cliente2);
        console.log(JSON.parse(mycliente2))
    }

    const data = new FormData();
    data.append()


    return <div>
        <header>
                <Cabecera1/>  
            </header>
    
        <RegistroP2 onGuardar ={guardarProyectoLS2}/>
        <Footer />
        </div>
  }
 
  
  export default registrarClienteP2