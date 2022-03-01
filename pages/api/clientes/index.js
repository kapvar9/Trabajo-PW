
const { guardarCliente } = require("../../../dao/clientes")


const clientesHandler = async(req,res) =>{
    if(req.method == "POST"){
        console.log("Se debería guardar en la base de datos")
        //Guardar datos de cliente en la BD
        const data = JSON.parse(req.body)
        //Se guarda los datos del paso 1 del formulario
        const clientenuevo = await guardarCliente(data.nombre, data.apellido, data.dni,data.correo, data.contraseña,data.estadovalidacion)

        //Se agregan los datos faltantes a la tabla
        //await actualizarCliente(clientenuevo.correo, clientenuevo.contraseña)
        
        //TODO: definir estado de validacion por defecto --> POR VALIDAR
        
        res.json({
            msg: "",   
        })
    }else{
        res.status(400).json({
            msg: "Metodo no definido"
        })
    }
}

export default clientesHandler