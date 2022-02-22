import Banner from "../components/banner.components"
import Footer from "../components/footer.components"
import FormularioLogin from "../components/formulario_login.components"
import RegistroBoton from "../components/registro_boton.components"
import { Image } from "react-bootstrap"
import { useEffect } from "react"
import { useState } from "react"
import NewspaperIcon from '@mui/icons-material/Newspaper';



export default function Home() {
  //Se tiene que crear una variable de estado que almacene el valor de las imagenes
  const [listaImagenes, setListaImagenes] = useState([]) //inicialmente va a ir vacia y con el fetch se llamara a las imagenes

    //funcion que permita loggearse
    const loginHandler = (username,password) =>{
      if (username == "admin" && password == "123") {
        location.href = "../mainAdmin"
      }else {
        location.href = "../mainCliente"
      }
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
             <RegistroBoton onRegistro = {registroHandler}/>    
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
        <div className="container">
          <div className="row flex">
              <div className="col-md-4">
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate">
                    <div className="icon-box">

                    </div>
                  </div>
              </div>
              <div className="col-md-4">

              </div>
              <div className="col-md-4">

              </div>

          </div>

        </div>
        <div className="mt-4">
                <hr></hr>
                <header className="noticias mb-2"><h2><b>Noticias recomendadas <NewspaperIcon fontSize="large"/></b></h2></header>
                <div className="mt-4 row featurette">
                    <div className="col-md-7">
                        <h3>Bitcoin: ¿Aprovechar la caida para comprar?</h3>
                        <p className="textoindex mt-2">
                        Una de las máximas del mercado es comprar en las caídas. ¿Pero es un buen momento para comprar Bitcoin tras la última corrección? Habrá que estar atentos a lo que hacen los inversores institucionales.
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
                        <h3>Sube bitcoin, suben las altcoins y el mercado vale más de 2 billones de dólares</h3>
                        <p className="textoindex mt-2">
                        Bitcoin retoma la senda alcista y, como suele ocurrir, el resto de las criptomonedas acompañan el movimiento. Ahora, el mercado vuelve a superar la marca de los 2 billones de dólares de capitalización, un hito que alcanzó por primera vez el año pasado y que, más recientemente, perdió con la caída de enero.
                        </p>
                        <a className="link-primary"  href="https://www.criptonoticias.com/mercados/sube-bitcoin-suben-altcoins-mercado-vale-mas-2-billones-dolares/">Seguir leyendo</a>
                    </div>
                    <div  className="col-md-5">
                        <Image className="featurette-image img-fluid mx-auto" alt="500x500" src="https://www.criptonoticias.com/wp-content/uploads/2022/02/btc-cohete-altcoins-1140x570.png.webp"/>
                    </div>
                </div>
            </div>        
        <Footer />
    </div>
       

  </div>
}
