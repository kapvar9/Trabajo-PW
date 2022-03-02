
import { useState } from "react"   // esto  se usa para importar el "state "
const BuyOrSellMoney = (props) =>{

    const [IUno, setIUno] = useState("")
    const [IUnoV, setIUnoV] = useState(0)
 
    const [tc, settc] = useState(0)
    const [IDos, setIDos] = useState("")
    const [IDosV, setIDosV] = useState(0)
    const [p, setp] = useState("")
    const [showS, setshowS] = useState("none")
    const [MostrarBgCompra, setMostrarBgCompra] = useState("#dedede")
    const [MostrarBgVenta, setMostrarBgVenta] = useState("#fff")

    const IDosVOnChange = (event) => {
        const IDosVOnChangeDT = event.target.value
        setIDosV(IDosVOnChangeDT)
    }

    const tcOnChange = (event) => {
        const tcOnChangeDT = event.target.value
        settc(tcOnChangeDT)
    }
    const IUnoVOnChange = (event) => {
        const IUnoVOnChangeDT = event.target.value
        setIUnoV(IUnoVOnChangeDT)
    }

    const EJectComprar = () => {
        setshowS("inline-flex")
        setIUno("Soles")
        setIDos("Bitcoins")
        setMostrarBgCompra("#dedede")
        setMostrarBgVenta("#fff")
        setp("Comprarás")
        // Se va a ejecutar la funcion que se paso por el props (onLogin)
        
      
    }
    const EJectVenta = () => {
        setshowS("inline-flex")
        setIUno("Bitcoins")
        setIDos("Soles")
        setMostrarBgCompra("#fff")
        setMostrarBgVenta("#dedede")
        setp("Venderás")
        // Se va a ejecutar la funcion que se paso por el props (onLogin)
        
      
    }
