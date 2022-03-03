
import { obtenerCliente}  from "../../../../dao/clientes"

//Aqui se define el endpoint
// Path: /api/clientes/[id]
const ClientesIdHandler = async (req, res) => {
    
    if (req.method == "GET") {
        const data = req.query
        const clientes = await obtenerCliente(data.id)
        res.json({
            msg: "",
            clientes : clientes
        })
    }
}

export default ClientesIdHandler