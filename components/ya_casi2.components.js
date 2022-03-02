import { useState } from "react";

const YaCasi2 = (props) => {

    const [txtNumeroTransaccion3, setTxtNumeroTransaccion3] = useState("")

    const txtNumeroTransaccion3Change =  (event) =>{
        setTxtNumeroTransaccion3(event.target.value)
    } 

    const butGuardarClick = () => {        
        props.onGuardar(txtNumeroTransaccion3)
     }

    return <aside class="col-md-8">
        <div class="card ">
            <div class="card-body" >
                <div className="container text-center">
                    <form className="form-label-group">
                        <div className="col-md-12">
                            <label for="txt_username" class="form label"><b>¡Ya casi estamos listos!</b></label>
                        </div>
                        <div className="col-md-15">
                            <label for="txt_username" class="form label">Nuestro número de cuenta BCP es &nbsp;XXX-XXXXX-XXXXXXXXXX</label>
                        </div>

                        <div className="row mb-1">
                            <div className="col-md-7">
                                <label for="txt_username" class="form label">Número de transacción</label>
                            </div>
                            <div className="col-md-1">
                            <input type="text"  id="disabledTextInput" 
                defaultValue={txtNumeroTransaccion3} onChange={txtNumeroTransaccion3Change}/>
                            </div>
                        </div>
                        <div className="col-md-15">

                            <a href="../historia31b" onClick={ butGuardarClick}>Siguiente </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </aside>
}
export default YaCasi2
