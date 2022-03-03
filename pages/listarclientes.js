import { useEffect, useState } from "react"
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
    //Se crea una variable para editar el formulario
    const [modoFormulario, setModoFormulario] = useState("nuevo") // modo: nuevo | edicion
    const [cliente, setCliente] = useState(null)

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

    //Funcion para actualizar estado de proyecto
    const actualizarClienteHandler = async (id, nombreCliente, apellidosCliente, dniCliente,correoCliente, celularCliente,estadovalidacionCliente) => {
        const cliente = {
            id:id,
            nombre: nombreCliente,
            apellidos : apellidosCliente,
            dni: dniCliente,
            correo : correoCliente,
            celular : celularCliente,
            estadovalidacion: estadovalidacionCliente
        }

        //peticion a backend para modificar usuario
        const resp = await fetch("/api/clientes",{
            method : "PUT",
            body : JSON.stringify(cliente)
        })
        const data = await resp.json()

        if (data.msg == "") {
            setDebeMostrarModal(false)
            const dataCliente = await obtenerClientesHTTP()
            setListadoClientes(dataCliente.clientes)
        }
    }

    //Se crea funcion donde se va a editar el proyecto
    //Con el id quiero obtener el dato del cliente
    const editarClienteModalHandler = async (id) => {
        //Se realiza la peticion HTTP para obtener un proyecto de determinado id
        const resp = await fetch(`/api/clientes/${id}`)
        //obtenemos data del cliente
        const data = await resp.json()
      
        setModoFormulario("edicion")
        setDebeMostrarModal(true)
        setCliente(data.clientes)

    }

    return (
      <div>
        <div>
          <header>
            <Cabecera />
          </header>
          <MenuNavegacionAdmin />
        </div>
        <div className="mt-4 card">
          <div className="card-header bg-primary text-white">
            <h3>
              Detalle de <b>clientes</b>
            </h3>
          </div>
          <div className="card-body">
            {/**Este componente es para el cuadro de búsqueda de texto */}
            <BuscadorCliente onResultado={resultadoCliente} />

            {/**Este componente es para mostrar los clientes almacenados en la BD*/}
            <ListaClientes
              clientes={listadoClientes} modo={ "crud" }
              onEditarCliente={editarClienteModalHandler}
            />

            {/**Este componente es para mostrar los datos del modal cliente*/}
            <EditarClienteModal
              mostrar={debeMostrarModal}
              ocultar={onModalClose}
              onActualizarCliente={ actualizarClienteHandler }
              cliente={cliente}
              modo={modoFormulario}
            />
          </div>
        </div>

        <Footer />
      </div>
    );

}
export default ListarClientes