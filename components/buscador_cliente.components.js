
import SearchIcon from '@mui/icons-material/Search';

const BuscadorCliente = (props) =>{
    return <div className="input-group mb-3 mt-4">
    <input type="text" className="form-control" placeholder="Ingrese el término de búsqueda"/>
    
    <button className="btn btn-secondary" type="button" id="button-addon2"
    onClick={props.onResultado}><SearchIcon/>Buscar</button>
    </div>
}
export default BuscadorCliente