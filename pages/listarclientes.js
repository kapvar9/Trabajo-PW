import { useState } from "react"
import { useEffect } from "react"
import Cabecera from "../components/header.components"
import MenuNavegacionAdmin from "../components/menu_navegacion_admin.components"
import BuscadorCliente from "../components/buscador_cliente.components"
import ListaClientes from "../components/listaClientesAdmin.components"
import Footer from "../components/footer.components"
import EditarClienteModal from "../components/editarclientemodal.components"



function ListarClientes () {

    //Variable de estado para modal
    const [debeMostrarModal, setDebeMostrarModal] = useState(false)
    //Se crea variable de estado donde se guardaran los clientes
    const [listadoClientes, setListadoClientes] = useState([])

    //Funcion para mostrarModal
    const onModalOpen = () =>{
        setDebeMostrarModal(true)
    }

    const onModalClose = () =>{
        setDebeMostrarModal(false)
    }


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
                    <ListaClientes clientes={listadoClientes} onEditarProyecto = {onModalOpen} />
                    <EditarClienteModal mostrar={ debeMostrarModal }
                    ocultar={ onModalClose }/>
                    
                </div>               
            </div>
       
            <Footer/>
    </div>

}
export default ListarClientes