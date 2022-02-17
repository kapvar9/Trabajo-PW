import Cabecera from "../components/header.components"
import NosotrosEtiqueta from "../components/nosotrosEtiqueta.components"
import Footer from "../components/footer.components"
function Nosotros() {
    return <div>
        <div>
            <Cabecera />
        </div>
        <a href=".." className="btn btn-success">Regresar</a>
        
        <h1 id="titulo">Nosotros</h1>
        <NosotrosEtiqueta />
        <Footer />
    </div>
  }
  
  export default Nosotros