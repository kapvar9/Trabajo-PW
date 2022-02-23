const YaCasi = () => {

    return <aside class="col-md-8">
        <div class="card ">
            <div class="card-body" >
                <div className="container text-center">
                    <form className="form-label-group">
                        <div className="col-md-12">
                            <label for="txt_username" class="form label"><b>¡Ya casi estamos listos!</b></label>
                        </div>
                        <div className="col-md-15">
                            <label for="txt_username" class="form label">Nuestra dirrección de billetera es &nbsp;XXX-XXXXX-XXXXXXXXXX</label>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-7">
                                <label for="txt_username" class="form label">Número de transacción</label>
                            </div>
                            <div className="col-md-1">
                                <input type="text" id="disabledTextInput" />
                            </div>
                        </div>
                        <div className="col-md-15">

                            <a href="../historia30b">Siguiente </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </aside>
}
export default YaCasi 
