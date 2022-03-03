import { useState } from "react"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ListaClientes = (props) => {
  if(props.modo == "lista"){
    return <div>
        <div className="mt-4 table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombres completos</th>
                <th scope="col">DNI</th>
                <th scope="col">Correo</th>
                <th scope="col">Celular</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            <tbody id="data_clientes">
            {
                  props.clientes.map((cliente)=> {
                    return <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nombre}  {cliente.apellidos}</td>
                        <td>{cliente.dni}</td>
                        <td>{cliente.correo}</td>
                        <td>{cliente.celular}</td>
                    </tr>
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
      
  }else if (props.modo == "crud"){
    return (
      <div>
        <div className="mt-4 table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombres completos</th>
                <th scope="col">DNI</th>
                <th scope="col">Correo</th>
                <th scope="col">Celular</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            <tbody id="data_clientes">
            {
                  props.clientes.map((cliente)=> {
                    return <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nombre}  {cliente.apellidos}</td>
                        <td>{cliente.dni}</td>
                        <td>{cliente.correo}</td>
                        <td>{cliente.celular}</td>
                        <td>
                          <button type="button" className="btn btn-link"  
                                  onClick={ () => {
                                  props.onEditarCliente(cliente.id)
                              }}>
                            Editar
                          </button>
                        </td>
                    </tr>
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
};
export default ListaClientes;