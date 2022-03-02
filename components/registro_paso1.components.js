import { useState } from "react"

const RegistroP1 = (props) => {
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

        //Guardar proyecto en local storage
        /*const guardarProyectoLS = (txtNombreCliente, txtApellidosCliente,txtDniCliente) =>{
            const cliente = {
                nombre:nombreCliente,
                apellidos: apellidoCliente,
                dni: DNICliente
            }
            //Se guardar cliente en local storage
            localStorage.setItem("clientes",JSON.stringify(clientes))
        }*/

        const butGuardarClick = () => {
            console.log(`Nombre: ${txtNombreCliente}`)
            console.log(`Apellidos: ${txtApellidosCliente}`)
            //se va a ejecutar la funcion que se paso por el props (onLogin)
            props.onGuardar(txtNombreCliente, txtApellidosCliente,txtDniCliente)
         }


        return <div>
            <h2 id="TituloRegistrar">Registrar: Paso 1</h2>
            <div id="contenedorRegistro">
            <form>
                <div className="form-group">
                    <label htmlFor="NombreUsuario">Nombre</label>
                    <input type="name" className="form-control" id="NombreUsuario" aria-describedby="emailHelp" placeholder="Nombre" 
                    defaultValue={txtNombreCliente} onChange={txtNombreClienteChange}/>                 
                </div>
    
                <div className="form-group">
                    <label htmlFor="ApellidoUsuario">Apellido</label>
                    <input type="name" className="form-control" id="ApellidoUsuario" aria-describedby="emailHelp" placeholder="Apellido" 
                    defaultValue={txtApellidosCliente} onChange={txtApellidosClienteChange}/>            
                </div>
    
                <div className="form-group">
                    <label htmlFor="DNIUsuario">DNI</label>
                    <input type="name" className="form-control" id="DNIUsuario" aria-describedby="emailHelp" placeholder="DNI" 
                    defaultValue={txtDniCliente} onChange={txtDniClienteChange}
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

                {/*<button type="button" onClick={butGuardarClick}>Guardar</button>*/}
                <a href="../registrarClienteP2" onClick={butGuardarClick} className="btn btn-success">Siguiente</a>
                
            </form>
            </div>
        </div>
}
export default RegistroP1