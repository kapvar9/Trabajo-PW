import Cabecera from "../components/header.components"
import MenuNavegacionAdmin from "../components/menu_navegacion_admin.components"

function MainAdmin() {
    return <div>
        <div>
            <header>
                <Cabecera/>  
            </header>
            <MenuNavegacionAdmin/>
            <div className="mt-4">
                <h1>Bienvenidx Admin</h1>
                <div className="mt-4">

                </div>
            </div>

        </div>
        
    </div>
  }
  
  export default MainAdmin