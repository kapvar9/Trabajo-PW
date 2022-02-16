//Path: /api/imagenesbanner1
const imagenesHandler = (req,res) => {
    //<Image src="/Images/LogoBitcoin.png" className="logo me-3" width="46" height="38" alt="Bootstrap"/>
    if(req.method == "GET"){
        const imagenes = [
            "../Images/bitcoin1.png",
            "../Images/bitcoin2.png",
            "../Images/bitcoin3.png"
        ]
        //lo que se le retorna al cliente
        res.json({
            images: imagenes,
            msg: " "
        })
    }else{
        res.status(400).json({
            //400 es error en el cliente
            msg: "Error, metodo no disponible"
    })
    }
}

export default imagenesHandler