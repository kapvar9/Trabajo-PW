const RegistroP1 = () => {
    
        return <div>
            <h2>Registrar: Paso 1</h2>
            <div>
            <form>
                <div class="form-group">
                    <label for="NombreUsuario">Nombre</label>
                    <input type="name" className="form-control" id="NombreUsuario" aria-describedby="emailHelp" placeholder="Nombre" />                 
                </div>
    
                <div class="form-group">
                    <label for="ApellidoUsuario">Apellido</label>
                    <input type="name" className="form-control" id="ApellidoUsuario" aria-describedby="emailHelp" placeholder="Apellido" />                 
                </div>
    
                <div class="form-group">
                    <label for="DNIUsuario">DNI</label>
                    <input type="name" className="form-control" id="DNIUsuario" aria-describedby="emailHelp" placeholder="DNI" />                 
                </div>
                <a href="../registrarClienteP2" class="btn btn-success">Siguiente</a>
                
            </form>
            </div>
        </div>
}
export default RegistroP1