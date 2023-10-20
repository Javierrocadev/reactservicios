import React, { Component } from 'react'
import Global from './../Global'
import axios from 'axios'
export default class Empleados extends Component {
    empleadosFull = []
    state = {
        empleados: [],
        status: false
    }
    loadEmpleados = () => {
        var idDept = this.props.iddepartamento
        var request = "api/empleados/empleadosdepartamento/" + idDept
        var url = Global.urlApiEmpleados + request
        console.log(url)
        axios.get(url).then(response => {
            this.empleadosFull = response.data
            this.setState({
                status: true,
                empleados: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadEmpleados()
    }
    componentDidUpdate = (oldProps) => {
        //dentro de oldProps tenemos el anterior props
        console.log("oldProps: " + oldProps.iddepartamento)
        console.log("actual oldprops " + this.props.iddepartamento);
        //solamente lo cargaremos de nuevo los datos si props ha cambiado
        if (this.props.iddepartamento != oldProps.iddepartamento) {
            this.loadEmpleados()
        }
    }
    render() {
        return (
            <div>
                <h1>Empleados {this.props.iddepartamento}</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>apellido</th>
                            <th>oficio</th>
                            <th>salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.status == true && (
                                this.state.empleados.map((empleados, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{empleados.apellido}</td>
                                            <td>{empleados.oficio}</td>
                                            <td>{empleados.salario}</td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
