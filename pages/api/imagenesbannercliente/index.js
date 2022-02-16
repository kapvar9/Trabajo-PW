//Path: /api/imagenesbanner1
const imagenesHandlercliente = (req,res) => {
    //<Image src="/Images/LogoBitcoin.png" className="logo me-3" width="46" height="38" alt="Bootstrap"/>
    if(req.method == "GET"){
        const imagenes2 = [
            "../Images/cliente1.jpg",
            "../Images/cliente2.jpg",
            "../Images/cliente3.jpg",
        ]
        //lo que se le retorna al cliente
        res.json({
            images: imagenes2,
            msg: " "
        })
    }else{
        res.status(400).json({
            //400 es error en el cliente
            msg: "Error, metodo no disponible"
    })
    }
}

export default imagenesHandlercliente