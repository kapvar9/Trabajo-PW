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
        <div className="card"> 
            <div className="card-body">
            <h3>Comprar y vender Bitcoin</h3>
                <div class = "input-group mb-3">
                    
                </div>


        </div>
        
        </div>

    </aside>