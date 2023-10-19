import React, { Component, createRef } from 'react'
import Global from './Global'
import axios from 'axios'
export default class BuscadorCustomer extends Component {
    urlApiCustomers = Global.urlApiCustomers
    cajaId = createRef()
    state = {
        customer: {},
        status: false
    }
    buscarCustomer = (e) => {
        e.preventDefault()
        var idCustomer = this.cajaId.current.value
        var request = "customers/" + idCustomer + ".json"
        axios.get(this.urlApiCustomers + request).then((response) => {
            this.setState({
                customer: response.data.customer,
                status: true
            })
        })
    }
    render() {
        return (
            <div>
                <h2>BuscadorCustomer</h2>
                <form onSubmit={this.buscarCustomer}>
                    <label>ID Customer: </label>
                    <input type='text' ref={this.cajaId} />
                    <button>Buscar cliente</button>
                </form>
                {
                    this.state.status == true && (
                        <div>
                            <h1 style={{ color: "blue" }}>
                                Cliente: {this.state.customer.contactName}
                            </h1>
                            <h2 style={{ color: "yellow" }}>
                                Empresa: {this.state.customer.companyName}
                            </h2>
                            <h2 style={{ color: "green" }}>
                                Ciudad: {this.state.customer.city}
                            </h2>
                            <h2 style={{ color: "orange" }}>
                                Cargo: {this.state.customer.contactTitle}
                            </h2>
                        </div>
                    )
                }

            </div>
        )
    }
}
