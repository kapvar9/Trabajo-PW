import { Image } from "react-bootstrap"


//Esta funcion llama a la lista de imagenes obtenida en fetch
const Banner = (props) => {
    return <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

            <div id="carrusel" className="carousel-inner">
                {
                    //Se usa map para convertir la lista JS en una lista JSX
                    //La lista va a recibir como argumentos la imagen y su posicion
                    props.images.map((imagen, index) => {
                    //Solo si es la primera imagen, se marca como active 
                        if (index == 0) {
                            return <div key={imagen} className="carousel-item active">
                                <Image src={ imagen } className="d-block w-100" alt="..."/>
                                <div className="banner p-3 mb-2 bg-secondary text-white carousel-caption"> 
                                    <h1 className="bannertitulo">Somos la mejor casa de cambio online</h1>
                                    <h6>Encuentra el mejor tipo de cambio con nosotros</h6>
                                </div>
                            </div>

                        }else if(index == 1){
                            return <div key={imagen} className="carousel-item">
                                <Image src={ imagen } className="d-block w-100" alt="..."/>
                                <div className="banner p-3 mb-2 bg-secondary text-white carousel-caption"> 
                                    <h1 className="bannertitulo">Soporte 24/7</h1>
                                    <h6>El sitio más seguro para compra y vender bitcoins</h6>
                                </div>
                            </div>
                        }else{
                            return <div key={imagen} className="carousel-item">
                                <Image src={ imagen } className="d-block w-100" alt="..."/>
                                <div className="banner p-3 mb-2 bg-secondary text-white carousel-caption"> 
                                    <h1 className="bannertitulo">Compra y vende desde cualquier lugar</h1>
                                    <h6>Sé parte del futuro de la economía</h6>
                                </div>   
                            </div>
                        }
                        
                    })
                }
            </div>
            {/**Se usa  */}
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

export default Banner
