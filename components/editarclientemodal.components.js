import { useState, useEffect } from "react"
import { Modal, Button } from "react-bootstrap"

const EditarClienteModal = (props) =>{
    //Se crea variables de estado para los campos nombre, apellidos, DNI, correo, celular y estado de validacion
    //TODO: crear variable estado de validacion
    const [idCliente, setIdCliente] = useState(0)
    const [txtNombreCliente, setTxtNombreCliente] = useState("")
    const [txtApellidosCliente, setTxtApellidosCliente] = useState("")
    const [txtDniCliente, setTxtDniCliente] = useState(0)
    const [txtCelularCliente, setTxtCelularCliente] = useState(0)
    const [txtCorreoCliente, setTxtCorreoCliente] = useState("")
    const [txtEstadoValidacion, setTxtEstadoValidacion] = useState(0)


    

    useEffect(() => {
        if (props.cliente != null) {
            setIdCliente(props.cliente.id)
            setTxtNombreCliente(props.cliente.nombre)
            setTxtApellidosCliente(props.cliente.apellidos)
            setTxtDniCliente(props.cliente.dni)
            setTxtCelularCliente(props.cliente.celular)
            setTxtCorreoCliente(props.cliente.correo)
        }
    }, [props.cliente])


    const txtEstadoValidacionOnChange = (event) => {
        setTxtEstadoValidacion(event.target.value)
    }


    const butCloseFormOnClick = () => {
        props.ocultar()
    }

    const butGuardarOnClick = () => {
        if (props.modo == "edicion") {
            props.onActualizarCliente(txtEstadoValidacion)
        }
        setTxtEstadoValidacion(0)
    }

    //Pruebas
    if(props.modo == "edicion" && props.cliente !=null){
        console.log("EDICION: ", props.cliente.id)
    }

    return <Modal show={ props.mostrar } 
            onHide={butCloseFormOnClick }>
        <Modal.Header closeButton>
        <Modal.Title>Editar cliente</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <form>
            <fieldset disabled>
                <div>
                    <label className="form-label">
                        Nombre
                    </label>
                    <input className="form-control" 
                        type="text" defaultValue={ txtNombreCliente }
                        />
                </div>
                <div>
                    <label className="form-label">
                        Apellidos
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={ txtApellidosCliente } />
                </div>
                <div>
                    <label className="form-label">
                        DNI
                    </label>
                    <input className="form-control"
                        type="number" defaultValue={ txtDniCliente } />
                </div>
                <div>
                    <label className="form-label">
                        Correo electronico
                    </label>
                    <input className="form-control"
                        type="email" defaultValue={ txtCorreoCliente } />
                </div>
                <div>
                    <label className="form-label">
                        Celular
                    </label>
                    <input className="form-control"
                        type="number" defaultValue={ txtCelularCliente } />
                </div>
            </fieldset>
            <div>
                <label className="form-label">
                    Estado de validacion
                </label>
                <select className="form-select" defaultValue={ txtEstadoValidacion }
                onChange={ txtEstadoValidacionOnChange }>
                    <option> ------ Seleccione una opción ------</option>
                    <option>Por validar</option>
                    <option>Validado</option>
                </select>
            </div>
            
        </form>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={ butCloseFormOnClick }>Cerrar</Button>
        <Button variant="primary" onClick={ butGuardarOnClick }>Guardar</Button>
        </Modal.Footer>
        </Modal>
}
export default EditarClienteModal 