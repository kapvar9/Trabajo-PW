import { useState } from "react"

const FormularioLoginAdmin = (props) =>{

     // Se crea las variables internas que almacenaran valores de admin
     const [txtUsernameAdmin, setTxtUsernameAdmin] = useState("")
     const [txtPasswordAdmin, setTxtPasswordAdmin] = useState("")
    
     //Se obtiene el valor del  usuario y se modifica el estado
     const txtUsernameAdminOnChange = (event) => {
         const txtUsernameAdminIngresado = event.target.value
         setTxtUsernameAdmin(txtUsernameAdminIngresado)
     }
     
      //Se obtiene el valor del  password y se modifica el estado
     const txtPasswordAdminOnChange = (event) => {
         setTxtPasswordAdmin(event.target.value)
     }
 
     const butLoginOnAdminClick = () => {
         //Se llama a la funcion del props
         props.onLogin(txtUsername, txtPassword)
     }
 
    return <aside>
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Iniciar sesión</h3>
                <form>
                    <div>
                        <label htmlFor="txt_username" className="form-label">Username</label>
                        <input id="txt_username" type="text" className="form-control"
                        defaultValue={ txtUsernameAdmin } onChange={ txtUsernameAdminOnChange } />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="txt_password" className="form-label">Password</label>
                        <input id="txt_password" type="password" className="form-control"
                        defaultValue={ txtPasswordAdmin } onChange={ txtPasswordAdminOnChange }/>
                    </div>
                    <div className="text-center">
                        <button id="butLogin"  className="btn btn-success" type="button"
                        onClick={ butLoginOnAdminClick}>Login</button>
                    </div>
                    
                </form>
               
            </div>
        </div>
    </aside>
}
export default FormularioLoginAdmin
