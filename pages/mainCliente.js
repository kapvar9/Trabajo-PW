import Bannercliente from "../components/bannerCliente.components"
import Cabecera from "../components/header.components"
import MenuNavegacionCliente from "../components/menu_navegacion_cliente.components"
import { useEffect, useState } from "react"


function MainUsuario() {
     //Se tiene que crear una variable de estado que almacene el valor de las imagenes
    const [listaImagenes2, setListaImagenes2] = useState([]) //inicialmente va a ir vacia y con el fetch se llamara a las imagenes

    useEffect(async() => {
        //Se hace una llamada AJAX para las imagenes del banner cliente
       let respuesta2 = await fetch("api/imagenesbannercliente")
       const dataImagenes2 = await respuesta2.json()
       setListaImagenes2(dataImagenes2.images)
     },[])

    return <div>
        <div>
            <header>
                <Cabecera/>  
            </header>
            <MenuNavegacionCliente/>
            <div className="mt-4">
                <h1>Bienvenidx usuarix</h1>
                <div className="mt-4">

                </div>
            </div>
        </div>
        <div className="mt-4">
            {/**Agregar banner con info para el cliente */}
            <Bannercliente imagescliente ={listaImagenes2}/>
            <div className="mt-4">
                
            </div>        
        </div>
        
        
    </div>
  }
  
  export default MainUsuario