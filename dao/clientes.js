import db from "../sequelize/models"

//En esa funcion se van a guardar los datos del primer paso de formulario
const guardarCliente = async(nombreCliente, apellidoCliente, DNICliente,correoCliente, passwordCliente,celularCliente) =>{
    //Se inserta valores en la tabla de la BD
    const clienteGuardado = await db.Cliente.create({
        nombre:nombreCliente,
        apellidos: apellidoCliente,
        dni: DNICliente,
        correo : correoCliente,
        constraseña : passwordCliente,
        celular : celularCliente
    })

    return guardarCliente
}

//En esa funcion se actualiza los datos obtenidos en el segundo paso del formulario --> se agrega correo y constraseña
/*const actualizarCliente = async(correoCliente, passwordCliente,celularCliente,clientes) =>{
    //se busca el id de cliente para actualizarlo
    for (let idcliente of clientes){
        await db.Cliente.save({
            idcliente : guardarCliente.id,
            correo : correoCliente,
            constraseña : passwordCliente,
            celular : celularCliente
        })
    }
}
*/

//Funcion para
const obtenerCliente = async(id) =>{

}

//Funcion para cambiar estado de cliente
const modificarCliente =async(cliente)=>{

}

//Se exportan metodos
export {guardarCliente,obtenerCliente,modificarCliente}