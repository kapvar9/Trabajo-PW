import db from "../sequelize/models"
//const Op = Sequelize.Op;

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


//Funcion obtener lista clientes
const obtenerListaClientes = async() =>{
    const listadoClientes = await db.Cliente.findAll({
        order : [
            ["id", "ASC"]
        ]
    })
    return listadoClientes
 }

//Funcion para obter un cliente 
const obtenerCliente = async(id) =>{

    //Se guarda respuesta dentro de variable cliente
    const cliente = await db.Cliente.findOne({
        where : {
            id : id
        }
    })
    return cliente
}

//Funcion para modificar datos del cliente
const modificarCliente =async(cliente)=>{

    //Cliente que se quiere modificar
    const clienteAModificar = await obtenerCliente(cliente.id)
    //Se guarda el nuevo estado
    clienteAModificar.estadovalidacion = cliente.estadovalidacion

    //Se actualiza el proyecto en la BD
    await clienteAModificar.save()
}

//TODO: Funcion para filtrar cliente --> todavía causa
/*const filtrarCliente = async() =>{
    const clienteFiltrado = await db.Cliente.findAll({
        where : {
            nombre: {
                [Op.like]: '%`${cliente.nombre}%`'
            },
            dni:{
                [Op.like]:'%`${cliente.dni}%`'
            },
            apellidos : {
                [Op.like]:'%`${cliente.apellidos}%`'
            },
            correo : {
                [Op.like]:'%`${cliente.correo}%`'
            }
        }
    })
    return clienteFiltrado
}*/


//Se exportan metodos
export {guardarCliente,obtenerListaClientes, obtenerCliente,modificarCliente}