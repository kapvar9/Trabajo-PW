import Footer from "../components/footer.components"
import MenuNavegacionAdmin from "../components/menu_navegacion_admin.components"
import CerrarSesionBoton from "../components/cerrarsesion_boton.components"
import ListaOperaciones from "../components/lista_operaciones.components"
import { Image } from "react-bootstrap"

function Historia33() {
    const listadooperaciones = [
        {
            id: "1223", fechahora: "25/02/22 02:25:30", cliente: "Giacomo Guilizzoni",
            tipo: "Comprar", cambio: 4.50, monto: 5200
        },
        { id: "", fechahora: "", cliente: "", tipo: "", cambio: "", monto: "" },
        { id: "", fechahora: "", cliente: "", tipo: "", cambio: "", monto: "" },
        { id: "", fechahora: "", cliente: "", tipo: "", cambio: "", monto: "" },
        { id: "", fechahora: "", cliente: "", tipo: "", cambio: "", monto: "" },
        { id: "", fechahora: "", cliente: "", tipo: "", cambio: "", monto: "" },
        { id: "", fechahora: "", cliente: "", tipo: "", cambio: "", monto: "" },
        { id: "", fechahora: "", cliente: "", tipo: "", cambio: "", monto: "" },
    ]
    const CerrarHandler = () => {
        location.href = "/"
    }
    return <div>
        <div className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
            {/**Agregar cabecera */}
            <header className="container-fluid d-flex align-items-center">
                <div className="d-flex align-items-center fs-4 text-white mb-0">
                    <Image src="/Images/LogoBitcoin.png" className="logo me-3" width="46" height="38" alt="Bootstrap" />
                    <h1>Crypto-nita</h1>
                </div>
                <div className="ms-auto">
                    {/**Se llama al componente botones */}
                    <CerrarSesionBoton cerrar={CerrarHandler} />
                </div>

            </header>
        </div>
        <div>
            <MenuNavegacionAdmin />
        </div>
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <div className="container text-center">
                            <h5 class="card-title">1</h5>
                            <p class="card-text">Operación realizada</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <div className="container text-center">
                            <h5 class="card-title">5200</h5>
                            <p class="card-text">Monto total operado de BitCoins</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4">
            <div className="row mt-100 w-100">
                <div>
                    <ListaOperaciones operaciones={listadooperaciones} />
                </div>
            </div>
            <Footer />
        </div>
    </div>
}

export default Historia33
