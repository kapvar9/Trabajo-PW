const Footer = () =>{
    return <footer className="bg-dark text-white text-lg-start mt-4">
        <div className="container p-4 text-center">
            <div className="row mt-4">
                <div className="col-md-4">
                    <h6 className="text-uppercase font-weight-bold">
                        <a href="../nosotros" >Nosotros</a>
                    </h6>
                    <hr style={{backgroundColor: 'white',height: 3,borderColor : 'white'}}/>
                </div>
                <div className="col-md-4">
                    <h6 className="text-uppercase font-weight-bold">
                        <a href="../contactanos" >Contactanos</a>
                    </h6>
                    <hr style={{backgroundColor: 'white',height: 3,borderColor : 'white'}}/>
                </div>
                <div className="col-md-4">
                    <h6 className="text-uppercase font-weight-bold">
                    <a href="../terminosycondiciones" >Terminos y condiciones</a>
                    </h6>
                    <hr style={{backgroundColor: 'white',height: 3,borderColor : 'white'}}/>
                </div>
            </div>             
        </div>
        <div className="text-center p-2" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
                        <p>
                        © 2022 Copyright: Grupo 6
                        </p>
            </div> 
    </footer>
}
export default Footer