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

}

//Funcion para cambiar estado de cliente
const modificarCliente =async(cliente)=>{

}

//Se exportan metodos
export {guardarCliente,obtenerCliente,modificarCliente}