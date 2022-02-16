import { Image } from "react-bootstrap"

//Esta funcion llama a la lista de imagenes obtenidas en fetch
const Bannercliente = (props) => {
    return <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

            <div id="carrusel" className="carousel-inner">
                {
                    //Se usa map para convertir la lista JS en una lista JSX
                    //La lista va a recibir como argumentos la imagen y su posicion
                    props.imagescliente.map((imagen, index) => {
                    //Solo si es la primera imagen, se marca como active 
                        if (index == 0) {
                            return <div key={imagen} className="carousel-item active">
                                <Image src={ imagen } className="d-block w-100" alt="..."/>
                                <div className="p-3 mb-2 bg-secondary text-white carousel-caption"> 
                                    <h1>Somos la mejor casa de cambio</h1>
                                    <p>Encuentra el mejor tipo de cambio con nosotros</p>
                                </div>
                            </div>
                        }else if(index == 1){
                            return <div key={imagen} className="carousel-item">
                                <Image src={ imagen } className="d-block w-100" alt="..."/>
                                <div className="p-3 mb-2 bg-secondary text-white carousel-caption"> 
                                    <h1>Soporte 24/7</h1>
                                    <p>El sitio más seguro para compra y vender bitcoins</p>
                                </div>
                            </div>
                        }else{
                            return <div key={imagen} className="carousel-item">
                                <Image src={ imagen } className="d-block w-100" alt="..."/>
                                <div className="p-3 mb-2 bg-secondary text-white carousel-caption"> 
                                    <h1>Compra y vende desde cualquier lugar</h1>
                                    <p>Sé parte del futuro de la economía</p>
                                </div>
                            </div>
                        }                    
                    })
                }
            </div>
        
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
}

export default Bannercliente
