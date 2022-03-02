import { useState } from "react"
import { useEffect } from "react"
import Cabecera from "../components/header.components"
import MenuNavegacionAdmin from "../components/menu_navegacion_admin.components"
import BuscadorCliente from "../components/buscador_cliente.components"
import ListaClientes from "../components/listaClientesAdmin.components"
import Footer from "../components/footer.components"



function ListarClientes () {


    //Se crea variable de estado donde se guardaran los clientes
    const [listadoClientes, setListadoClientes] = useState([])

    //href="../listarclientes"
    const resultadoCliente = () =>{
        location.href = "/mostraclienteresultado"
    }

    const obtenerClientesHTTP = async () => {
        let response = await fetch("/api/clientes")
        const data = await response.json()
        console.log(data)
        return data
    }

    useEffect(async () => {
        // Hacemos una peticion al backend
        const data = await obtenerClientesHTTP()
        setListadoClientes(data.clientes)

    }, [])

    /*const mostrarClienteHandler = async(id) =>{

        // peticion a backend para agregar un nuevo proyecto
         const resp = await fetch("/api/clientes", {
            method : "GET",
            body : JSON.stringify(clientes)
        })
        const data = await resp.json()

        if (data.msg == "") {
            setDebeMostrarModal(false)
            const dataProyectos = await obtenerProyectosHTTP()
            setListadoProyectos(dataProyectos.proyectos)
        }
    }*/

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
                    {/**Este componente es para el cuadro de búsqueda de texto */}
                    <BuscadorCliente onResultado={resultadoCliente}/>
                    {/**Este componente es para mostrar los clientes almacenados en la BD*/}
                    <ListaClientes clientes={listadoClientes} />
                    
                </div>               
            </div>
       
            <Footer/>
    </div>

}
export default ListarClientes