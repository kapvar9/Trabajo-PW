const RegistroP1 = () => {
        //Se crea variables de estado para el componente
        const [txtNombreCliente, setTxtNombreCliente] = useState("")
        const [txtApellidosCliente, setTxtApellidosCliente] = useState("")
        const [txtDniCliente, setTxtDniCliente] = useState("")

        const txtNombreClienteChange =  (event) =>{
            setTxtNombreCliente(event.target.value)
        }  

        const txtApellidosClienteChange =  (event) =>{
            setTxtApellidosCliente(event.target.value)
        }
        const txtDniClienteChange =  (event) =>{
            setTxtDniCliente(event.target.value)
        }    


        
        return <div>
            <h2 id="TituloRegistrar">Registrar: Paso 1</h2>
            <div id="contenedorRegistro">
            <form>
                <div className="form-group">
                    <label htmlFor="NombreUsuario">Nombre</label>
                    <input type="name" className="form-control" id="NombreUsuario" aria-describedby="emailHelp" placeholder="Nombre" 
                    defaultvalue={txtNombreCliente} onChange={txtNombreClienteChange}/>                 
                </div>
    
                <div className="form-group">
                    <label htmlFor="ApellidoUsuario">Apellido</label>
                    <input type="name" className="form-control" id="ApellidoUsuario" aria-describedby="emailHelp" placeholder="Apellido" 
                    defaultvalue={txtApellidosCliente} onChange={txtApellidosClienteChange}/>            
                </div>
    
                <div className="form-group">
                    <label htmlFor="DNIUsuario">DNI</label>
                    <input type="name" className="form-control" id="DNIUsuario" aria-describedby="emailHelp" placeholder="DNI" 
                    defaultvalue={txtDniCliente} onChange={txtDniClienteChange}
                    />                 
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
                <a href="../registrarClienteP2" className="btn btn-success">Siguiente</a>
                
            </form>
            </div>
        </div>
}
export default RegistroP1