import { useState } from "react";

const YaCasi = (props) => {

    const [txtNumeroTransaccion, setTxtNumeroTransaccion] = useState("")

    const txtNumeroTransaccionChange =  (event) =>{
        setTxtNumeroTransaccion(event.target.value)
    } 

    const butGuardarClick = () => {        
        props.onGuardar(txtNumeroTransaccion)
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
                            <label htmlFor="txt_username" className="form label">Nuestra dirrección de billetera es &nbsp;XXX-XXXXX-XXXXXXXXXX</label>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-7">
                                <label htmlFor="txt_username" className="form label">Número de transacción</label>
                            </div>
                            <div className="col-md-1">
                            <input type="text"  id="disabledTextInput" 
                defaultValue={txtNumeroTransaccion} onChange={txtNumeroTransaccionChange}/>
                            </div>
                        </div>
                        <div className="col-md-15">

                            <a href="../historia30b" onClick={ butGuardarClick}>Siguiente </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </aside>
}
export default YaCasi 
