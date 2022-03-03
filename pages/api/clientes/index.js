
const { guardarCliente, obtenerListaClientes,modificarCliente,filtrarCliente} = require("../../../dao/clientes")


const clientesHandler = async(req,res) =>{
    if(req.method == "POST"){
        console.log("Se debería guardar en la base de datos")
        //Guardar datos de cliente en la BD
        const data = JSON.parse(req.body)
        console.log(data)
        //Se guarda los datos del paso 1 del formulario
        await guardarCliente(data.nombre, data.apellidos, data.dni,data.celular,data.correo, data.contrasena)
        
        res.json({
            msg: "",   
        })
    
    }else if(req.method == "GET"){
        const clientes = await obtenerListaClientes()
        //const clientesFiltrados = await filtrarCliente()
        res.json({
            clientes: clientes,   
        })
    //Este metodo se llama para actualizar el estado del cliente
    }else if(req.method == "PUT"){
        //Se pasa la data
        const data = JSON.parse(req.body)
        //Se llama a la funcion modificar proyecto
        await modificarCliente(data)
        //Se retorna mensaje vacio porque ya se modifico
        res.json({
            msg: ""
        })
        
    }else{
        res.status(400).json({
            msg: "Metodo no definido"
        })
    }
}

export default clientesHandler