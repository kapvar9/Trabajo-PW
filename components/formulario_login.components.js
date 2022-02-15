

const FormularioLogin = (props) =>{

    return <aside>
        <div className="card">
            <div className="card-body">
                <h3>Iniciar sesión</h3>
                <form>
                    <div>
                        <label htmlFor="txt_username" className="form-label">Username</label>
                        <input id="txt_username" type="text" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="txt_password" className="form-label">Password</label>
                        <input id="txt_password" type="password" className="form-control"/>
                    </div>
                    <button id="butLogin"  className="btn btn-primary" type="button"
                    onClick={props.onLogin}>Login</button>
                </form>
               
            </div>
        </div>
    </aside>
}
export default FormularioLogin
