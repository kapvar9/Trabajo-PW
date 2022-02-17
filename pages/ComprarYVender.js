import Footer from "../components/footer.components"
import BuyOrSellMoney from "../components/BuyOrSellMoney.components"




export default function Home() {

    //funcion que permita loggearse
    const loginHandler = () =>{
      location.href = "/mainUsuario"
    }
    const registroHandler = () =>{
      location.href = "/registro"
    }

  return <div>
    <div className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
      {/**Agregar cabecera */}
      <header className ="container-fluid d-flex align-items-center">
        <div className="d-flex align-items-center fs-4 text-white mb-0">
            <img src="https://www.pngmart.com/files/15/Gold-Bitcoin-Transparent-PNG.png" className="me-3" width="46" height="38" alt="Bootstrap"/>
            <h1>Crypto-nita</h1>  
        </div>
              
        
       </header>
    </div>
    <div className="mt-4">
        
  
        <div className = "row mt-4 w-100">
         

          <div className= "p-auto">
              <BuyOrSellMoney style="margin:0 auto" />
          </div>
          
        </div>
        <Footer />
    </div>
       

  </div>
}