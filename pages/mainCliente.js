import Bannercliente from "../components/bannerCliente.components"
import Cabecera from "../components/header.components"
import MenuNavegacionCliente from "../components/menu_navegacion_cliente.components"
import Footer from "../components/footer.components"
import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"

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
                <header><h1><b>Noticias del día</b></h1></header>
                <div className="mt-4 row featurette">
                    <div className="col-md-7">
                        <h2>Bitcoin: ¿Aprovechar la caida para comprar?</h2>
                        <p>
                            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                        </p>
                        <a  className="link-primary" href="https://www.estrategiasdeinversion.com/actualidad/noticias/bolsa-eeuu/bitcoin-aprovechar-la-caida-para-comprar-n-501619">Seguir leyendo</a>
                    </div>
                    <div  className="col-md-5">
                        <Image className="featurette-image img-fluid mx-auto" alt="500x500" src="https://www.estrategiasdeinversion.com/uploads/noticias_redaccion/Portada2/bitcoin_grafico_azul.jpg"/>
                    </div>
                </div>
                <hr></hr>
                <div className="mt-4 row featurette">
                    <div className="col-md-7">
                        <h2>Sube bitcoin, suben las altcoins y el mercado vale más de 2 billones de dólares</h2>
                        <p>
                            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                        </p>
                        <a className="link-primary"  href="https://www.criptonoticias.com/mercados/sube-bitcoin-suben-altcoins-mercado-vale-mas-2-billones-dolares/">Seguir leyendo</a>
                    </div>
                    <div  className="col-md-5">
                        <Image className="featurette-image img-fluid mx-auto" alt="500x500" src="https://www.criptonoticias.com/wp-content/uploads/2022/02/btc-cohete-altcoins-1140x570.png.webp"/>
                    </div>
                </div>
            </div>        
        </div>
        <Footer />
        
        
    </div>
  }
  
  export default MainUsuario