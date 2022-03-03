
import Cabecera from "../components/header.components"
import MenuNavegacionAdmin from "../components/menu_navegacion_admin.components"

import Footer from "../components/footer.components"
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function ResultadoCliente () {

    //href="../listarclientes"
    const regresarCliente = () =>{
        location.href = "/listarclientes"
      }

    return <div>
        <div>
            <header>
            <Cabecera/>  
            </header>
            <MenuNavegacionAdmin/>
        </div>
        <div className="mt-4 card">
            <div className="card-header bg-primary text-white">
                <h3>Resultados de <b>búsqueda</b></h3>
            </div>
            <div className="card-body">
                <div className="input-group mb-3 mt-4">
                    <input type="text" className="form-control" placeholder="Evelyn"/>
                    
                    <button className="btn btn-secondary" type="button" id="button-addon2"><SearchIcon/>Buscar</button>
                </div>
                <div className="mt-4 table-responsive">
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
                                <td><EditIcon/><DeleteIcon/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center mb-2">
                <button onClick={regresarCliente} className="but1 btn btn-danger" type="button">Regresar</button>
                                
            </div>  

        </div>
       
        <Footer/>
    </div>

}
export default ResultadoCliente