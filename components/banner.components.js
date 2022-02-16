

const Banner = () => {
    return <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

            <div id="carrusel" className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.livemint.com/img/2021/10/13/1600x900/2021-06-29T130757Z_380481375_RC2BAO9W0AZV_RTRMADP_3_CRYPTO-CURRENCY_1625626556435_1634169038921.JPG" alt="..."/>
                </div>
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

export default Banner
