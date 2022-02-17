import Cabecera from "../components/header.components"
import MenuNavegacionAdmin from "../components/menu_navegacion_admin.components"
import { Image } from "react-bootstrap"
import Footer from "../components/footer.components"


function MainAdmin() {
    return <div>
        <div>
            <header>
                <Cabecera/>  
            </header>
            <MenuNavegacionAdmin/>
            <div className="mt-4">
                <h1>Bienvenidx Admin</h1>
                <div className="mt-4 card py-3 align-items-center">
                    <h5>Tu ultimo loggeo fue el martes,16 de febrero a las 4:00 pm</h5>
                </div>
            </div>
            <div className="row mt-4">
                <div>
                    <h4 className="card-title float-left"> Numero de transacciones del día</h4>
                    <div className="mt-4 card">
                        <Image id="imagenadmin" src="../images/grafico.png"  className="d-block w-100" alt="..."/>
                    </div> 
                </div>
            </div>
            <div className="row mt-4 mx-auto ">
                {/**Se crea espacio para visualizar chats */}
                <div className="col-md-4 border bg-light">
                <button type="button" className="btn btn-danger">
                    CHAT <span className="badge badge-light">3</span>
                    <span className="sr-only">Mensajes sin leer</span>
                    </button> 
                    <div className="card-body contacts_body">
                        <ui className="list-group list-group-flush">
                            <li className="row mt-2">
                                <div className="col-md-3 d-flex bd-highlight">
                                    <Image src="../images/profile1.jpg" className="rounded-circle user_img" height="60px" width="50px"/> 
                                </div>
                                <div className="col-md-9 info_usuario">
                                    <h6>Khalid</h6>
                                    <p>Enviaste el correo?</p>
                                </div>
                            </li>
                            <li className="row mt-2">
                                <div className="col-md-3 d-flex bd-highlight">
                                    <Image src="../images/profile2.jpg" className="rounded-circle user_img" height="60px" width="50px"/>
                                </div>
                                <div className="col-md-9 info_usuario">
                                    <h6>Maria</h6>
                                    <p>Hola! Una consulta...</p>
                                </div>
                            </li>
                            <li className="row mt-2">
                                <div className="col-md-3 d-flex bd-highlight">
                                    <Image src="../images/profile3.jpg" className="rounded-circle user_img" height="60px" width="50px"/>
                                    
                                </div>
                                <div className="col-md-9 info_usuario">
                                    <h6>Erika</h6>
                                    <p>Un favor...</p>
                                </div>
                            </li>
                        </ui>
                    </div>
                </div>
                {/**Se crea espacio para visualizar tareas*/}
                <div className="col-md-4">
                    <div className="card-header bg-primary text-white text-center"><h6>TAREAS</h6></div>
                    <div className="input-group mb-3 mt-2">
                    <input type="text" className="form-control" placeholder="Nueva tarea" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                         <button className="btn btn-secondary" type="button">Agregar</button>
                        </div>
                    </div>                                 
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <input type="checkbox"/> Enviar plan de trabajo mensual</li>
                        <li className="list-group-item"> <input type="checkbox"/> Solicitar cotización</li>
                        <li className="list-group-item"> <input type="checkbox"/> Solicitar estado de cuenta al BCP</li>
                    </ul>
                    
                </div>
                {/**Se crea espacio para horario */}
                <div className="col-md-4">
                    <div className="card-header bg-success text-white text-center"><h6>CALENDARIO</h6></div>
                    <div className="card-body bg-light">
                        <h4 className="card-title text-center">Mié,16 de feb</h4>
                    </div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Hora</th>
                                <th scope="col">Evento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">9:00 am</td>
                                <td>Daily meeting</td>
                            </tr>
                            <tr>
                                <td scope="row">2:00 pm</td>
                                <td>Revisión validación de clientes</td>
                            </tr>
                            <tr>
                                <td scope="row">3:00 pm</td>
                                <td>Revisión de transacciones</td>
                            </tr>
                        </tbody>
                        </table>
                </div>

            </div>

        </div>
        <Footer/>
    </div>
  }
  
  export default MainAdmin