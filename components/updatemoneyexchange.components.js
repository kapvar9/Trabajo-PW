
import { useState } from "react"   // esto  se usa para importar el "state "
const UpDateMoneyExchange = (props) =>{

    const [PENTOBTC, setPENTOBTC] = useState(0)
    const [BTCTOPEN, setBTCTOPEN] = useState(0)

    const PENTOBTCOnChange = (event) => {
        const PENTOBTCOnChangeDT = event.target.value
        setPENTOBTC(PENTOBTCOnChangeDT)
    }

    const BTCTOPENOnChange = (event) => {
        const BTCTOPENOnChangeDT = event.target.value
        setBTCTOPEN(BTCTOPENOnChangeDT)
    }

    const GuardarYComprobar = () => {
        // Se va a ejecutar la funcion que se paso por el props (onLogin)

        console.log("PEN TO BTC " + PENTOBTC)
        console.log("BTC TO PEN " + BTCTOPEN)
        if(PENTOBTC > BTCTOPEN){
            alert("El valor de PEN a BTC debe ser menor al valor de BTC a PEN")
        }
    }

    return <aside>
        <div className="card" >
            <div style={{"max-width":"300px","margin": "0 auto"}} className="card-body">
                <h3>Editar tipo de cambio</h3>
                <form>
                    <div>
                        <label htmlFor="txt_username" className="form-label">BTC-PEN</label>
                        <input id="txt_username" type="number" className="form-control" defaultValue={ BTCTOPEN } onChange={ BTCTOPENOnChange } />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="txt_password" className="form-label">PEN-BTC</label>
                        <input id="txt_password" type="Number" className="form-control" defaultValue={ PENTOBTC } onChange={ PENTOBTCOnChange } />
                    </div>
                    <button id="butLogin"  className="btn btn-primary" type="button"
                    onClick={GuardarYComprobar}>Guardar</button>
                </form>
               
            </div>
        </div>
    </aside>
}
export default UpDateMoneyExchange
