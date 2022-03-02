import { useState, useEffect } from "react"
import { Modal, Button } from "react-bootstrap"

const ClienteModal = (props) => {
 
    //Se crea una variable que va a cambiar el estado de validacion
    const [txtEstadoValidacion, setTxtEstadoValidacion] = useState(0)
  
    
    useEffect(() => {
        if (props.cliente != null) {
            setTxtEstadoValidacion(props.cliente.idusuario)
        }
    }, [props.cliente])

    const txtEstadoValidacionOnChange = (event) => {
        setTxtEstadoValidacion(event.target.value)
    }


    const listaTecnologiasOnChange = (event) => {
        const listaIds = Array.from(event.target.selectedOptions).map((option)=>{
            return parseInt(option.value)
        })
        setListaIdTecnologiasSeleccionadas(listaIds)
    }

    const butGuardarOnClick = () => {
        if (props.modo == "edicion") {
            props.onActualizarProyecto(idProyecto, txtNombreProyecto, txtUsuario, txtRating,listaIdTecnologiasSeleccionadas)
        } else {
            props.onGuardarProyecto(txtNombreProyecto, txtUsuario, txtRating,listaIdTecnologiasSeleccionadas)
        }
        setTxtNombreProyecto("")
        setTxtUsuario(0)
        setTxtRating(0)
    }

    const butCloseFormOnClick = () => {
        setTxtNombreProyecto("")
        setTxtUsuario(0)
        setTxtRating(0)
        props.ocultar()
    }

    return <Modal show={ props.mostrar } 
                onHide={ butCloseFormOnClick }>
        <Modal.Header closeButton>
            <Modal.Title>Formulario Proyecto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">
                        Nombre de Proyecto
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={ txtNombreProyecto }
                        onChange={ txtNombreProyectoOnChange }/>
                </div>
                <div>
                    <label className="form-label">
                        Usuario
                    </label>
                    <select className="form-select" defaultValue={ txtUsuario }
                        onChange={ txtUsuarioOnChange }>
                        <option value={ 0 }> ------ Seleccione una opción ------</option>
                        {
                            props.usuarios.map((usuario) => {
                                console.log(usuario)
                                return <option value={ usuario.id } key={ usuario.id }>
                                            { usuario.username }
                                        </option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <label className="form-label">
                        Rating
                    </label>
                    <input className="form-control"
                        type="number" defaultValue={ txtRating }
                        onChange={ txtRatingOnChange }/>
                </div>
                <div>
                <label className="form-label">
                        Tecnologías
                    </label>
                    <select className="form-select" defaultvalue={listaIdTecnologiasSeleccionadas } 
                    onChange={listaTecnologiasOnChange} multiple>
                        {/**Se carga con tecnologia de la BD */}
                        {
                            props.tecnologias.map((tecnologia) =>{
                                return <option value={tecnologia.id} key={tecnologia.id } >
                                    {tecnologia.nombre}
                                </option>
                            })
                        }
                    </select>

                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Cerrar</Button>
            <Button variant="primary"
                onClick={ butGuardarOnClick }>Guardar</Button>
        </Modal.Footer>
    </Modal>
}

export default ClienteModal