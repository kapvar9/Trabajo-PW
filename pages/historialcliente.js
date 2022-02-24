
import Cabecera from "../components/header.components"
import MenuNavegacionCliente from "../components/menu_navegacion_cliente.components"

import Footer from "../components/footer.components"
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function HistorialCliente () {

    //href="../listarclientes"
    const resultadoCliente = () =>{
        location.href = "/mostraclienteresultado"
    }

    return <div>
        <div>
            <header>
            <Cabecera/>  
            </header>
            <MenuNavegacionCliente/>
        </div>
        <div className="mt-4 card">
            <div className="card-header bg-primary text-white">
                <h3>Historial de <b>actividades</b></h3>
            </div>
            <div className="card-body">
                <div className="mt-4 table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tipo de operacion</th>
                                <th scope="col">Monto de Bitcoin</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">12325</th>
                                <td>Compra</td>
                                <td>12345678</td>
                                <td>01/02/22</td>
                                <td>12:00:00 pm</td>
                                
                            </tr>
                            <tr>
                            <th scope="row">12345</th>
                                <td>Venta</td>
                                <td>12345651</td>
                                <td>4/02/22</td>
                                <td>21:00:00 pm</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">12345</th>
                                <td>Compra</td>
                                <td>12345673</td>
                                <td>10/02/22</td>
                                <td>10:30:12 pm</td>
                              
                            </tr>
                            <tr>
                            <th scope="row">12389</th>
                                <td>Venta</td>
                                <td>12345678</td>
                                <td>16/02/22</td>
                                <td>23:40:00 pm</td>
                            
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            

        </div>
       
        <Footer/>
    </div>

}
export default HistorialCliente