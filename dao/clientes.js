import db from "../sequelize/models"


const guardarCliente = async(nombreCliente, apellidoCliente, DNICliente,celularCliente,  correoCliente, passwordCliente) =>{
    //Se inserta valores en la tabla de la BD
    const clienteGuardado = await db.Cliente.create({
        nombre:nombreCliente,
        apellidos: apellidoCliente,
        dni: DNICliente,
        correo : correoCliente,
        celular : celularCliente,
        contraseña : passwordCliente,
        estadovalidacion : "Por validar"
    })

    return clienteGuardado
}

//Funcion para
const obtenerCliente = async(id) =>{
    const cliente = await db.Proyecto.findOne({
        where : {
            id : id
        }
    })
    return cliente
}
//Funcion obtener lista clientes
const obtenerListaClientes = async() =>{
    const listadoClientes = await db.Cliente.findAll()
    return listadoClientes
 }

//Funcion para cambiar estado de cliente
const modificarCliente =async(cliente)=>{

}

//Se exportan metodos
export {guardarCliente,obtenerListaClientes, obtenerCliente,modificarCliente}