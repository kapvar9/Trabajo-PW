import Cabecera3 from "../components/header3.components"
import Footer from "../components/footer.components"
import FormularioLoginAdmin from "../components/formulario_admin_login.components"



function LoginAdmin() {
    return <div className="loginAdmin">
        <div>
            <header>
                <Cabecera3/>  
            </header>
        </div>
        <div >
            <div className="text-center mt-4">
                <h1 className="tituloindex">Bienvenido administrador</h1>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className=" justify-content-center mt-4 col-md-4">
                    <FormularioLoginAdmin/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  }
  
  export default LoginAdmin