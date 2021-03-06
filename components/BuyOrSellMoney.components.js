
import { useState } from "react"   // esto  se usa para importar el "state "
const BuyOrSellMoney = (props) => {

    const [IUno, setIUno] = useState("")
    const [IUnoV, setIUnoV] = useState(0)

    const [tc, settc] = useState(0)
    const [IDos, setIDos] = useState("")
    const [IDosV, setIDosV] = useState(0)
    const [p, setp] = useState("")
    const [pa, setpa] = useState()
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
        setpa(<button className="btn btn-success" type="button" onClick={butComprar}>Solicitar</button>)
        // Se va a ejecutar la funcion que se paso por el props (onLogin)


    }
    const EJectVenta = () => {
        setshowS("inline-flex")
        setIUno("Bitcoins")
        setIDos("Soles")
        setMostrarBgCompra("#fff")
        setMostrarBgVenta("#dedede")
        setp("Venderás")
        setpa(<button className="btn btn-success" type="button" onClick={butVender}>Solicitar</button>)
        // Se va a ejecutar la funcion que se paso por el props (onLogin)


    }

    const EJectCalculo = () => {
        console.log("Funciona")
        console.log(IUnoV)
        //Jalar tipo de cambio con fetch y reemplazar en una variable con 5
        console.log(tc)
        var calc = IUnoV * tc
        setIDosV(calc)
        console.log(IDosV)
        // Se va a ejecutar la funcion que se paso por el props (onLogin)


    }

    const butComprar = () => {
        location.href = "../historia29"
    }

    const butVender = () => {
        location.href = "../historia28"
    }

    return <aside>
        <div className="card" >
            <div className="card-body">
                <h3>Comprar y vender Bitcoin</h3>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Tipo de cambio" onChange={tcOnChange} aria-label="Recipient's username" aria-describedby="basic-addon2" />

                </div>
                <div className="container">
                    <div className="row" style={{ "margin-bottom": "50px", "margin-top": "100px" }}>
                        <div className="col-6 bold" style={{ "font-weight": "bold", "font-size": "26px", "background": MostrarBgCompra, "cursor": "pointer", "padding": "4px", "border-radius": "10px", "text-align": "center" }} onClick={EJectComprar}>Comprar BTC</div>
                        <div className="col-6 bold" style={{ "font-weight": "bold", "font-size": "26px", "background": MostrarBgVenta, "cursor": "pointer", "padding": "4px", "border-radius": "10px", "text-align": "center" }} onClick={EJectVenta}>Vender BTC</div>
                    </div>
                    <div className="row" style={{ "width": "100%", "margin": "0 auto", "display": showS }}>
                        <div className="col-6">
                            <label htmlFor="txt_password" className="form-label">Cantidad que {p}</label>
                            <div className="input-group mb-3">
                                <input type="number" className="form-control" placeholder={IUno} onChange={IUnoVOnChange} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" onClick={EJectCalculo} type="button">Calcular</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <label htmlFor="txt_password" className="form-label">Recibirás</label>
                            <div className="input-group mb-3">
                                <input type="number" classNames="form-control" placeholder={IDos} onChange={IDosVOnChange} defaultValue={IDosV} aria-label="Recipient's username" aria-describedby="basic-addon2" />

                            </div>

                        </div>
                    </div>

                </div>
                {pa}
            </div>
        </div>

    </aside>
}
export default BuyOrSellMoney
