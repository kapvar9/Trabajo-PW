import FinalizarBoton from "./finalizar_boton.components"

const EstamosVal = () => {
    const FinalizarHandler = () => {
        location.href = "/"
    }
    return <aside className="col-md-8">
        <div className="card ">
            <div className="card-body" >
                <div className="container text-center">
                    <div className="col-md-12">
                        <label htmlFor="txt_username" className="form label">Estamos validando tu transacción</label>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="txt_username" className="form label">Revisa tu historial de operaciones en unos minutos</label>
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
