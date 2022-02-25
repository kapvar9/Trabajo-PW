import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PublicIcon from '@mui/icons-material/Public';

const VentajasPagina = () => {
    return <div className="container mt-4">
        <h1 className="ventajastitulo text-center">Ventajas de Crypto-nita</h1>
        <h4 className="ventajassubtitulo text-center">Los detalles marcan la diferencia</h4>
        <div className="row flex mt-4">
            <div className="col-md-4">
                <div >
                    <div className="card text-center">
                        <div className="mt-2">
                            <FlashOnIcon  color="primary" sx={{ fontSize: 70}} />
                        </div>
                        <div>
                            <h2 className="benefitstitle mt-2">Rápida</h2>
                            <p className="benefitstext mt-2">Compra, vende, intercambia, analiza... todo con un clic</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="col-md-4">
                <div className="card text-center">
                <div className="mt-2">
                    <ThumbUpOffAltIcon color="primary" sx={{ fontSize: 70}} />
                </div>
                <div>
                    <h2 className="benefitstitle mt-2">Fácil</h2>
                    <p className="benefitstext mt-2">Diseñada especialmente para recién llegados al sector.</p>
                </div>               
                </div> 
            </div>
            <div className="col-md-4">
                <div className="card text-center">
                <div className="mt-2">
                    <PublicIcon color="primary" sx={{ fontSize: 70}} />
                </div>
                <div>
                    <h2 className="benefitstitle mt-2">Global</h2>
                    <p className="benefitstext mt-2">Múltiples servicios disponibles para más de 180 países</p>
                </div>               
                </div> 
            </div>

        </div>
    </div>
}
export default VentajasPagina