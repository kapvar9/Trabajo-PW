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
                            </div>

                        }else {
                            return <div key={imagen} className="carousel-item">
                                <Image src={ imagen } className="d-block w-100" alt="..."/>
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
