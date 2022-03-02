import RegistroP2 from "../components/registro_paso2.components"
import Cabecera1 from "../components/header2.components"

import Footer from "../components/footer.components"
import cliente from "../sequelize/models/cliente"

function registrarClienteP2() {

<<<<<<< HEAD
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

=======
    

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


>>>>>>> 21e0720bc564dae90e22afd54ace10e5a47ba119
    return <div>
        <header>
                <Cabecera1/>  
            </header>
    
<<<<<<< HEAD
        <RegistroP2 onGuardarCliente = {guardarProyectoHandler}/>
=======
        <RegistroP2 onGuardar ={guardarProyectoLS2}/>
>>>>>>> 21e0720bc564dae90e22afd54ace10e5a47ba119
        <Footer />
        </div>
  }
 
  
  export default registrarClienteP2