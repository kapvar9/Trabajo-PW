import { useState } from "react";

const DireccionBilletera = (props) => {

    const [txtDireccionBilletera, setTxtDireccionBilletera] = useState("")

    const txtDireccionBilleteraChange =  (event) =>{
        setTxtDireccionBilletera(event.target.value)
    } 

    const butGuardarClick = () => {        
        props.onGuardar(txtDireccionBilletera)
     }

    return <aside class="col-md-8">
        <div class="card ">
            <div class="card-body" >
                <div className="container text-center">
                    <form className="form-label-group">
                        <div className="row mb-3">
                            <div className="col-md-7">
                                <label for="txt_username" class="form label">Ingresa tu dirección de billetera</label>
                            </div>
                            <div className="col-md-1">
                            <input type="text"  id="disabledTextInput" 
                defaultValue={txtDireccionBilletera} onChange={txtDireccionBilleteraChange}/>
                            </div>
                        </div>
                        <div className="col-md-15">

                            <a href="../historia31a" onClick={ butGuardarClick}>Siguiente </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <p>
            <div className="container text-center">
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label for="txt_username" class="form label">Recuerda que solo trabajamos con cuentas BCP</label>
                    </div>
                </div>
            </div>
        </p>
    </aside>
}
export default DireccionBilletera1
