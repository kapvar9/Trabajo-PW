const nbilletera = () => {

    return <aside className="col-md-8">
        <div  className="card ">
            <div  className="card-body" >
                <div className="container text-center">
                    <form className="form-label-group">
                        <div className="col-md-12">
                            <label htmlFor="txt_username"  className="form label"><b>¡Ingresa tu número de billetera !</b></label>
                        </div>
                        
                        <div className="row mb-3">
                           
                            <div className="col-md-1">
                                <input type="text" id="disabledTextInput" />
                            </div>
                        </div>
                        <div className="col-md-15">

                            <a href="../historia30b"> Confirmar </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </aside>
}
export default nbilletera

