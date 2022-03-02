import { useState, useEffect } from "react"
import { Modal, Button } from "react-bootstrap"

const EditarClienteModal = (props) =>{

    const butCloseFormOnClick = () => {
        props.ocultar()
    }

    return <Modal show={ props.mostrar } 
            onHide={butCloseFormOnClick }>
        <Modal.Header closeButton>
        <Modal.Title>Editar cliente</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <form>
            <div>
                <label className="form-label">
                    Nombre
                </label>
                <input className="form-control"
                    type="text" />
            </div>
            <div>
                <label className="form-label">
                    Apellidos
                </label>
                <input className="form-control"
                    type="text" />
            </div>
            <div>
                <label className="form-label">
                    DNI
                </label>
                <input className="form-control"
                    type="number" />
            </div>
            <div>
                <label className="form-label">
                    Correo electronico
                </label>
                <input className="form-control"
                    type="email" />
            </div>
            <div>
                <label className="form-label">
                    Celular
                </label>
                <input className="form-control"
                    type="number" />
            </div>
            <div>
                <label className="form-label">
                    Estado de validacion
                </label>
            </div>
            
        </form>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary">Cerrar</Button>
        <Button variant="primary">Guardar</Button>
        </Modal.Footer>
        </Modal>
}
export default EditarClienteModal 