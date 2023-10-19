import React, { Component } from 'react'
import Global from './Global'
//importamos la libreria axios
import axios from 'axios'
export default class ServicioCustomers extends Component {
    //necesitamos una url de acceso al servicio
    urlApiCustomers = Global.urlApiCustomers
    //como es un dibujo dinamico necesitamos un state
    //para almacenar un conjunto de objetos customers
    state = {
        customers: []
    }
    //metodo para cargar todos los clientes del 
    //servicio API
    loadCustomers = () => {
        console.log('loading customers...');
        var request = "customers.json"
        axios.get(this.urlApiCustomers + request).then(response => {
            //console.log(response.data);
            this.setState({ customers: response.data.results });
        })
    }
    //tenemos un metodo de ciclo de vida
    //cargar los clientes solamente al iniciar el component
    componentDidMount = () => {
        console.log('creando component')
        this.loadCustomers();
    }
    render() {
        return (<>
            <div>ServicioCustomers</div>
            {this.state.customers.map((cliente, index) => {
                return (
                    <h2 style={{ color: "blue" }} key={index}>
                        {cliente.contactName}
                    </h2>
                )
            })}
        </>
        )
    }
}
