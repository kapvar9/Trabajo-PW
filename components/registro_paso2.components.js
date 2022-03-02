import { useState } from "react"

const RegistroP2 = (props) => {
    //Se crea variables de estado para el componente
    const [txtCelularCliente, setTxtCelularCliente] = useState(0)
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

    const butGuardarFinalClick = () => {

        props.onGuardarCliente(txtCelularCliente, txtCorreoCliente,txtPasswordCliente)
        location.href = "/esperaCliente"
     }

    return <div>
        <h2 id="tituloRegistrar2">Registrar Paso 2</h2>
        <div id="registrar2">
        <div  className="container mt-8">

        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Celular</label>
                <input type="tel" className="form-control" id="exampleInputTel1" aria-describedby="telHelp" placeholder="Ingresa el numero de celular" 
                defaultValue={txtCelularCliente} onChange={txtCelularClienteChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Correo</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                defaultValue={txtCorreoCliente} onChange={txtCorreoClienteChange} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"
                defaultValue={txtPasswordCliente} onChange={txtPasswordClienteChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Repetir Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Repetir contraseña" />
            </div>
            <div className="boton md-8">

            <a href="../registrarClienteP1" className="btn btn-success">Regresar</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/*<a href="../esperaCliente" className="btn btn-success">Confirmar</a>*/}
            <button className="btn btn-success" type="button" onClick={butGuardarFinalClick }>Siguiente</button>
            </div>
        </form>

        </div>
        </div>
    </div>
}
export default RegistroP2