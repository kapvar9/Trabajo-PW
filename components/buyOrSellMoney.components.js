import { useState } from "react"
const buyOrSellMoney =(props) =>{

    const  [iUno, setiUno] = useState ("")
    const  [iUnoV, setiUnoV] = useState (0)
    const  [iDos, setiDos] = useState ("")
    const  [iUno, setiDosV] = useState (0)
    const  [p, setp] = useState ("")
    const [showS, setshowS] = useState("none")
    const [mostrarBgCompra, setmostrarBgCompra] = useState("#dedede")
    const [mostrarBgVenta, setmostrarBgVenta] = useState("#fff")

    const iDosVOnChange = (event) => {
        const iDosVOnChangeDT = event.target.value
        setIDosV(iDosVOnChangeDT)
    }
    const iUnoVOnChange = (event) => {
        const iUnoVOnChangeDT = event.target.value
        setIDosV(iUnoVOnChangeDT)
    }
    //Se ejecuta la funcion que paso por el props (onLogin)
    const ejectComprar =() => {
        setshowS("inline-flex")
        setiUno ("Soles")
        setiDos("Bitcoins")
        setmostrarBgCompra("#dedede")
        setmostrarBgVenta("#fff")

    }

    //Se ejecuta la funcion venta que paso por el props (onLogin)

    const ejectVenta =() => {
        setshowS("inline-flex")
        setiUno ("Bitcoins")
        setiDos("Soles")
        setmostrarBgCompra("#dedede")
        setmostrarBgVenta("#fff")

    }
    const ejectCalculo =() => {
        console.log("Funciona")
        setiUno ("Bitcoins")
        console.log(iUnoV)
        //Jalar tipo de cmbio con fetch y reemplazar en una variable con 5
        var calc = iUnoV * 5
        setiDosV(calc)
        console.log(iDosV)

    }

    return <aside>
        <div className="card" >
            <div className="card-body">
                <h3>Comprar y vender Bitcoin</h3>
                <div class="input-group mb-3">
  <input type="number" class="form-control" placeholder="Tipo de cambio"   aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  
</div>
                <div class="container">
            <div class="row" style={{"margin-bottom": "50px","margin-top": "100px"}}>
                <div class="col-6 bold" style={{"font-weight": "bold","font-size":"26px","background":MostrarBgCompra,"cursor":"pointer","padding":"4px","border-radius":"10px","text-align":"center"}} onClick={ EJectComprar }>Comprar BTC</div>
                <div class="col-6 bold" style={{"font-weight": "bold","font-size":"26px","background":MostrarBgVenta,"cursor":"pointer","padding":"4px","border-radius":"10px","text-align":"center"}} onClick={ EJectVenta }>Vender BTC</div>
            </div>
            <div class="row" style={{"width":"100%","margin": "0 auto", "display": showS}}>
                <div class="col-6">
                <label htmlFor="txt_password" className="form-label">Cantidad que {p}</label>
                <div class="input-group mb-3">
  <input type="number" class="form-control" placeholder= {IUno}  onChange={ IUnoVOnChange } aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" onClick={ EJectCalculo } type="button">Calcular</button>
  </div>
</div>
                        
                </div>
                <div class="col-6">
                <label htmlFor="txt_password" className="form-label">Recibirás</label>
                <div class="input-group mb-3">
  <input type="number" class="form-control" placeholder= {IDos} onChange={ IDosVOnChange } defaultValue={ IDosV } aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  
</div>
                        
                </div>
            </div>
        
</div>
               
            </div>
        </div>
    </aside>
}
export default buyOrSellMoney