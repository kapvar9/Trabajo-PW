import { useState } from "react";

const RegistroP2 = (props) => {
    
    //Se crea variables de estado para el componente
    const [txtCelularCliente, setTxtCelularCliente] = useState("")
    const [txtCorreoCliente, setTxtCorreoCliente] = useState("")
    const [txtPasswordCliente, setTxtPasswordCliente] = useState("")

    const txtCelularClienteChange =  (event) =>{
        setTxtCelularCliente(event.target.value)
    }  

    const txtCorreoClienteChange =  (event) =>{
        setTxtCorreoCliente(event.target.value)
    }
    const txtPasswordClienteChange =  (event) =>{
        setTxtPasswordCliente(event.target.value)
    }    

    const butGuardarClick = () => {
        //se va a ejecutar la funcion que se paso por el props (onLogin)
        props.onGuardar(txtCelularCliente, txtCorreoCliente,txtPasswordCliente)
     }


    return <div>

        <h2 id="tituloRegistrar2">Registrar Paso 2</h2>
        <div id="registrar2">
        <div  className="container mt-8">
        
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Celular</label>
                <input type="text" className="form-control" id="celularUsuario" placeholder="Celular" 
                defaultValue={txtCelularCliente} onChange={txtCelularClienteChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Correo</label>
                <input type="text" className="form-control" id="correoUsuario" aria-describedby="emailHelp" placeholder="Ingrese email" 
                defaultValue={txtCorreoCliente} onChange={txtCorreoClienteChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="Password1" placeholder="Contraseña" 
                defaultValue={txtPasswordCliente} onChange={txtPasswordClienteChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Repetir Password</label>
                <input type="password" className="form-control" id="Password2" placeholder="Repetir contraseña" />
            </div>
            <div className="boton md-8">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
    
            <a href="../registrarClienteP1" className="btn btn-success">Regresar</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <a href="../esperaCliente" onClick={ butGuardarClick } className="btn btn-success">Confirmar</a>
            </div>
        </form>
        
        </div>
        </div>
    </div>
}
export default RegistroP2