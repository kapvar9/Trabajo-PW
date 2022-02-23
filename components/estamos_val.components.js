import FinalizarBoton from "./finalizar_boton.components"

const EstamosVal = () => {
    const FinalizarHandler = () => {
        location.href = "/"
    }
    return <aside class="col-md-8">
        <div class="card ">
            <div class="card-body" >
                <div className="container text-center">
                    <div className="col-md-12">
                        <label for="txt_username" class="form label">Estamos validando tu transacción</label>
                    </div>
                    <div className="col-md-12">
                        <label for="txt_username" class="form label">Revisa tu historial de operaciones en unos minutos</label>
                    </div>
                    <div className="col-md-12">
                        <FinalizarBoton finalizar={FinalizarHandler} />
                    </div>
                </div>
            </div>
        </div>
    </aside>
}
export default EstamosVal
