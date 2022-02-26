import { useState } from "react"

const FormularioLoginAdmin = (props) =>{

    
     const butLoginOnAdminClick = () => {
         //Se llama a la funcion del props
         props.onLogin()
     }
 
    return <aside>
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Iniciar sesión</h3>
                <form>
                    <div>
                        <label htmlFor="txt_username" className="form-label">Username</label>
                        <input id="txt_username" type="text" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="txt_password" className="form-label">Password</label>
                        <input id="txt_password" type="password" className="form-control"/>
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
