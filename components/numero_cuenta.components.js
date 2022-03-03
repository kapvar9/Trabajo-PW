import { useState } from "react";

const NumeroCuenta = (props) => {

    const [txtNumeroCuenta, setTxtNumeroCuenta] = useState("")

    const txtNumeroCuentaChange =  (event) =>{
        setTxtNumeroCuenta(event.target.value)
    } 

    const butGuardarClick = () => {        
        props.onGuardar(txtNumeroCuenta)
     }

    return <aside className="col-md-8">
        <div className="card ">
            <div className="card-body" >
                <div className="container text-center">
                    <form className="form-label-group">
                        <div className="row mb-3">
                            <div className="col-md-7">
                                <label htmlFor="txt_username" className="form label">Número de cuenta</label>
                            </div>
                            <div className="col-md-1">
                            <input type="text"  id="disabledTextInput" 
                defaultValue={txtNumeroCuenta} onChange={txtNumeroCuentaChange}/>
                                
                            </div>
                        </div>
                        <div className="col-md-15">

                            <a href="../historia30a" onClick={ butGuardarClick }>Siguiente </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <p>
            <div className="container text-center">
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label htmlFor="txt_username"className="form label">Recuerda que solo trabajamos con cuentas BCP</label>
                    </div>
                </div>
            </div>
        </p>
    </aside>
}
export default NumeroCuenta 
