import Banner from "../components/banner.components"
import Footer from "../components/footer.components"
import FormularioLogin from "../components/formulario_login.components"
import RegistroBoton from "../components/registro_boton.components"
import { Image } from "react-bootstrap"
import { useEffect } from "react"
import { useState } from "react"
import LoginAdminBoton from "../components/loginadmin_boton.components"
import VentajasPagina from "../components/ventajas.components"
import Noticias from "../components/noticias.components"

export default function Home() {
  //Se tiene que crear una variable de estado que almacene el valor de las imagenes
  const [listaImagenes, setListaImagenes] = useState([]) //inicialmente va a ir vacia y con el fetch se llamara a las imagenes

    //funcion que permita loggearse
    const loginHandler = (username,password) =>{
      if (username == "admin" && password == "123") {
        location.href = "../listarclientes"
      }else {
        location.href = "../ComprarYVender"
      }
    }

    const loginHandlerAdmin = () => {
      location.href = "../loginadmin"
    }
    
    const registroHandler = () =>{
      location.href = "/registrarClienteP1"
    }

   
    //Se usa useEffect
    useEffect(async()=>{
       //Se hace una llamada AJAX para las imagenes del banner
      let respuesta = await fetch("api/imagenesbanner1")
      const dataImagenes = await respuesta.json()
      setListaImagenes(dataImagenes.images)
    },[])

  return <div>
    <div className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
      {/**Agregar cabecera */}
      <header className ="container-fluid d-flex align-items-center">
        <div className="d-flex align-items-center fs-4 text-white mb-0">
            <Image src="/Images/LogoBitcoin.png" className="logo me-3" width="46" height="38" alt="Bootstrap"/>
            <h1>Crypto-nita</h1> 
        </div>
        <div className="ms-auto">
             <LoginAdminBoton onLoginAdmin = {loginHandlerAdmin}/>    
        </div>           
        
       </header>
    </div>
    <div className="mt-4"> 
        
        <Banner images={listaImagenes}/>  {/*se llama al componente Banner*/}
        <div className = "row mt-4">
          <div className= "p-5 col-md-8">
            <h1 className="tituloindex">Empieza hoy</h1>
            <p className="textoindex">Compra Bitcoins y empieza a crear tu cartera de criptomonedas fácilmente</p>
            <RegistroBoton onRegistro = {registroHandler}/>   
          </div>

          <div className= "col-md-4">
              <FormularioLogin onLogin = {loginHandler}/>
          </div>
        </div>
        <hr></hr>
        <div>
          <VentajasPagina/>
        </div>
        <div>
          <Noticias />  
        </div>
        <Footer />
    </div>
       

  </div>
}
