import { Image } from "react-bootstrap"
import NewspaperIcon from '@mui/icons-material/Newspaper';


const Noticias = () => {
    return <div className="mt-4">
        <hr></hr>
        <header className="noticias mb-2"><h2><b>Noticias recomendadas <NewspaperIcon fontSize="large"/></b></h2></header>
        <div className="mt-4 row featurette">
            <div className="col-md-7">
                <h3>Bitcoin: ¿Aprovechar la caida para comprar?</h3>
                <p className="textoindex mt-2">
                Una de las máximas del mercado es comprar en las caídas. ¿Pero es un buen momento para comprar Bitcoin tras la última corrección? Habrá que estar atentos a lo que hacen los inversores institucionales.
                </p>
                <a  className="link-primary" href="https://www.estrategiasdeinversion.com/actualidad/noticias/bolsa-eeuu/bitcoin-aprovechar-la-caida-para-comprar-n-501619">Seguir leyendo</a>
            </div>
            <div  className="col-md-5">
                <Image className="featurette-image img-fluid mx-auto" alt="500x500" src="https://www.estrategiasdeinversion.com/uploads/noticias_redaccion/Portada2/bitcoin_grafico_azul.jpg"/>
            </div>
        </div>
        <hr></hr>
        <div className="mt-4 row featurette">
            <div className="col-md-7">
                <h3>Sube bitcoin, suben las altcoins y el mercado vale más de 2 billones de dólares</h3>
                <p className="textoindex mt-2">
                Bitcoin retoma la senda alcista y, como suele ocurrir, el resto de las criptomonedas acompañan el movimiento. Ahora, el mercado vuelve a superar la marca de los 2 billones de dólares de capitalización, un hito que alcanzó por primera vez el año pasado y que, más recientemente, perdió con la caída de enero.
                </p>
                <a className="link-primary"  href="https://www.criptonoticias.com/mercados/sube-bitcoin-suben-altcoins-mercado-vale-mas-2-billones-dolares/">Seguir leyendo</a>
            </div>
            <div  className="col-md-5">
                <Image className="featurette-image img-fluid mx-auto" alt="500x500" src="https://www.criptonoticias.com/wp-content/uploads/2022/02/btc-cohete-altcoins-1140x570.png.webp"/>
            </div>
        </div>
    </div>   
}

export default Noticias