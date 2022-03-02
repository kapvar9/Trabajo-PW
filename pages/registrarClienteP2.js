import RegistroP2 from "../components/registro_paso2.components"
import Cabecera1 from "../components/header2.components"

import Footer from "../components/footer.components"
import cliente from "../sequelize/models/cliente"

function registrarClienteP2() {

    const guardarProyectoHandler = async (txtCelularCliente, txtCorreoCliente,txtPasswordCliente) =>{

        //Obtener datos del local storage 
        const clientesSTR = localStorage.getItem("clientes")
        //Convertir poryectos con JSON PARSE
        const clienteparcial = JSON.parse(clientesSTR)

        //Actualizar datos de objeto
        const cliente = {
            nombre : clienteparcial.nombre,
            apellidos : clienteparcial.apellidos,
            dni: clienteparcial.dni,
            celular:txtCelularCliente,
            correo: txtCorreoCliente,
            contraseña: txtPasswordCliente
        }

        const resp = await fetch("/api/clientes", {
            method : "POST",
            body : JSON.stringify(cliente)
        })

        const data = await resp.json()

        //Se guardar cliente en local storage
        /*localStorage.setItem("clientes",JSON.stringify(cliente))
        location.href = "/registrarClienteP2"*/
       

    }

    return <div>
        <header>
                <Cabecera1/>  
            </header>
    
        <RegistroP2 onGuardarCliente = {guardarProyectoHandler}/>
        <Footer />
        </div>
  }
 
  
  export default registrarClienteP2