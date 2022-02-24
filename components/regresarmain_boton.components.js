import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const BotonRegresarMain = (props) => {
    return <button id="butRegresar" onClick={props.onRegresar} className="btn btn-danger float-right" type="button"><ArrowBackIcon/>Regresar</button>

}
export default BotonRegresarMain