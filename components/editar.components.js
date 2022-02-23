const Editar = () => {

    return <aside class="col-md-8">
        <h1>Editar operación</h1>        
        <div className="mt-4 card">
            <div className="card-body"> 
            <div className="container text-center">
                    <form className="form-label-group">
                        <fieldset disabled>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label htmlFor="disabledTextInput" className="form-label">Id</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="1223"/>
                                </div>                        
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label htmlFor="disabledTextInput" className="form-label">Fecha y hora</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="25/02/22 02:25:30"/>
                                </div>                        
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label htmlFor="disabledTextInput" className="form-label">Cliente</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Giacomo Guilizzoni"/>
                                </div>                        
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label htmlFor="disabledTextInput" className="form-label">Tipo de operación</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Comprar"/>
                                </div>                        
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label htmlFor="disabledTextInput" className="form-label">Tipo de cambio</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="4.50"/>
                                </div>                        
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label htmlFor="disabledTextInput" className="form-label">Monto</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="5200"/>
                                </div>                        
                            </div>
                            
                        
                        </fieldset>
                        <div className="row mb-3">
                                <div className="col-md-4">
                                    <label htmlFor="disabledTextInput" className="form-label">Estado</label>
                                </div>
                                <div className="col-md-auto"> 
                                    <select>
                                        <option>Finalizado</option>
                                        <option>Pendiente</option>
                                    </select>
                                </div>                                             
                            </div>
                            <div className="d-grid gap-6 d-md-block">
                            <button id="butGuardar" className="btn btn-primary float-right" type="button">Guardar</button>
                            </div>                        
                    </form>
                </div>  
            </div>
        </div>
    </aside>
}
export default Editar

