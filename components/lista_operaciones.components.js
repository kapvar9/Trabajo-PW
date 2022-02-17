const ListaOperaciones = (props) => {
    return <main className="col-md-10">
        <h1>Lista de operaciones</h1>
        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Fecha y hora</th>
                    <th>Cliente</th>
                    <th>Tipo de operación</th>
                    <th>Tipo de cambio</th>
                    <th>Monto</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody id="data_operaciones">
                {
                    props.operaciones.map((operacion) => {
                        return <tr key={operacion.nombre}>
                            <td>{operacion.id}</td>
                            <td>{operacion.fechahora}</td>
                            <td>{operacion.cliente}</td>
                            <td>{operacion.tipo}</td>
                            <td>{operacion.cambio}</td>
                            <td>{operacion.monto}</td>
                            <td><a href="../historia34">Editar</a></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </main>
}

export default ListaOperaciones
