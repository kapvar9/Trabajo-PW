import Cabecera from "../components/header.components"
import MenuNavegacionAdmin from "../components/menu_navegacion_admin.components"
import Footer from "../components/footer.components"
import { Dropdown } from "react-bootstrap"

function EditarCliente () {   

    const regresarCliente = () =>{
        location.href = "/listarclientes"
      }
   

    return <div>
        <div>
            <header>
            <Cabecera/>  
            </header>
            <MenuNavegacionAdmin/>
        </div>
        <div className="mt-4 card">
            <div className="card-body">
                <h3 className="text-center mb-4">Editar cliente</h3>

                <div className="container text-center">
                    <form className="form-label-group">
                        <fieldset disabled>
                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label htmlFor="disabledTextInput" className="form-label">Nombre</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Evelyn"/>
                                </div>                        
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label htmlFor="disabledTextInput" className="form-label">Apellidos</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Cotrina"/>
                                </div>                        
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label htmlFor="disabledTextInput" className="form-label">DNI</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="12345678"/>
                                </div>                        
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label htmlFor="disabledTextInput" className="form-label">Correo</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="evelyn.cotrina@grupo6.com.pe"/>
                                </div>                        
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label htmlFor="disabledTextInput" className="form-label">Celular</label>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="999999999"/>
                                </div>                        
                            </div>
                        
                        </fieldset>
                        <div className="row mb-3">
                                <div className="col-md-2">
                                    <label htmlFor="disabledTextInput" className="form-label">Estado</label>
                                </div>
                                <div className="col-md-auto"> 
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Seleccionar estado
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Por validar</Dropdown.Item>
                                            <Dropdown.Item>Validado</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                                    
                            </div>
                            <div className="d-grid gap-6 d-md-block">
                                <button onClick={regresarCliente} className="but1 btn btn-danger" type="button">Regresar</button>
                                <button onClick={regresarCliente} className="but1 btn btn-success" type="button">Guardar</button>
                            </div>                        
                    </form>
                </div>   
                
            </div>
            
        </div>
        <Footer/>
    </div>

        
}
export default EditarCliente