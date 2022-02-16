import { Image } from "react-bootstrap"

const Cabecera = () =>{
    //Se crea el componente cabecera que sera usado en las otras paginas
    
    return <div className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
    <header className ="container-fluid d-flex align-items-center">
      <div className="d-flex align-items-center fs-4 text-white mb-0">
          <Image src="/Images/LogoBitcoin.png" className="logo me-3" width="46" height="38" alt="Bootstrap"/>
          <h1>Crypto-nita</h1> 
      </div>        
     </header>
    </div>
}
export default Cabecera