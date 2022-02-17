const RegistroP2 = () => {
    return <div>
        <h2 id="tituloRegistrar2">Registrar Paso 2</h2>
        <div id="registrar2">
        <div  className="container mt-8">
        
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Correo</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Repetir Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Repetir contraseña" />
            </div>
            <div className="boton md-8">
            <a href="../registrarClienteP1" className="btn btn-success">Regresar</a>
            <a href="../esperaCliente" className="btn btn-success">Siguiente</a>
            </div>
        </form>
        
        </div>
        </div>
    </div>
}
export default RegistroP2