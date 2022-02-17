
import Cabecera from "../components/header.components"
import MenuNavegacionAdmin from "../components/menu_navegacion_admin.components"
import { Image } from "react-bootstrap"
import Footer from "../components/footer.components"
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function ListarClientes () {

    //href="../listarclientes"

    return <div>
        <div>
            <header>
            <Cabecera/>  
            </header>
            <MenuNavegacionAdmin/>
        </div>
        <div className="mt-4 card">
            <div className="card-header bg-primary text-white">
                <h3>Detalle de <b>clientes</b></h3>
            </div>
            <div className="card-body">
                <div className="input-group mb-3 mt-4">
                    <input type="text" className="form-control" placeholder="Ingrese el término de búsqueda"/>
                    
                    <button className="btn btn-secondary" type="button" id="button-addon2"><SearchIcon/>Buscar</button>
                </div>
                <div className="mt-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombres completos</th>
                                <th scope="col">DNI</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Evelyn Cotrina</td>
                                <td>12345678</td>
                                <td>evelyn.cotrina@grupo6.com.pe</td>
                                <td>999999999</td>
                                <td><a href="/editarcliente"><EditIcon/></a><DeleteIcon/></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Luis Gutarra</td>
                                <td>12345678</td>
                                <td>luis.gutarra@grupo6.com.pe</td>
                                <td>999999999</td>
                                <td><a href="/editarcliente"><EditIcon/></a><DeleteIcon/></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Maritza Palomino</td>
                                <td>12345678</td>
                                <td>maritza.palomino@grupo6.com.pe</td>
                                <td>999999999</td>
                                <td><a href="/editarcliente"><EditIcon/></a><DeleteIcon/></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Kory Ponce</td>
                                <td>12345678</td>
                                <td>kory.ponce@grupo6.com.pe</td>
                                <td>999999999</td>
                                <td><a href="/editarcliente"><EditIcon/></a><DeleteIcon/></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            

        </div>
       
        <Footer/>
    </div>

}
export default ListarClientes