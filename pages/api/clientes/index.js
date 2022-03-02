
const { guardarCliente, obtenerListaClientes} = require("../../../dao/clientes")


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

        res.json({
            clientes: clientes,   
        })
    }
    else{
        res.status(400).json({
            msg: "Metodo no definido"
        })
    }
}

export default clientesHandler