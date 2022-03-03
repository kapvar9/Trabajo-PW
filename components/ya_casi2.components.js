import { useState } from "react";

const YaCasi2 = (props) => {

    const [txtNumeroTransaccion2, setTxtNumeroTransaccion2] = useState("")

    const txtNumeroTransaccion2Change =  (event) =>{
        setTxtNumeroTransaccion2(event.target.value)
    } 

    const butGuardarClick = () => {        
        props.onGuardar(txtNumeroTransaccion2)
     }

    return <aside className="col-md-8">
        <div className="card ">
            <div className="card-body" >
                <div className="container text-center">
                    <form className="form-label-group">
                        <div className="col-md-12">
                            <label htmlFor="txt_username" className="form label"><b>¡Ya casi estamos listos!</b></label>
                        </div>
                        <div className="col-md-15">
                            <label htmlFor="txt_username" className="form label">Nuestro número de cuenta BCP es &nbsp;XXX-XXXXX-XXXXXXXXXX</label>
                        </div>

                        <div className="row mb-1">
                            <div className="col-md-7">
                                <label htmlFor="txt_username" className="form label">Número de transacción</label>
                            </div>
                            <div className="col-md-1">
                            <input type="text"  id="disabledTextInput" 
                defaultValue={txtNumeroTransaccion2} onChange={txtNumeroTransaccion2Change}/>
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
