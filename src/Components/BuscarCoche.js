import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'

export default class BuscarCoche extends Component {
    cajaMarca = React.createRef()
    cochesAll = []; //para guardar los coches la primera vez
    state = {
        coches: []
    }
    cargarCoche = (e) => {
        if (e != null) {
            e.preventDefault();
        }
        var request = "webresources/coches"
        var url = Global.urlApiCoches
        console.log(url)
        axios.get(url + request).then((response) => {
            console.log(response)
            this.setState({
                coches: response.data

            })
            this.cochesAll = response.data
        })

    }
    buscarCoche = (e) => {
        e.preventDefault()
        var cochesTemp = this.cochesAll
        var marca = this.cajaMarca.current.value
        var cochesFiltrados = cochesTemp.filter(coche => coche.marca.includes(marca))
        this.setState({
            coches: cochesFiltrados
        })
    }
    componentDidMount = () => {
        this.cargarCoche()
    }
    render() {
        return (
            <div>
                <h1>BuscarCoche</h1>
                <form>
                    <label>ID Customer: </label>
                    <input type="text" ref={this.cajaMarca} />
                    <button onClick={this.buscarCoche}>Buscar coche</button>
                    <button onClick={this.cargarCoche}>Recargar coche</button>
                </form>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Conductor</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.coches.map((coche, index) => {
                                return (
                                    <tr key={index}>
                                        <td><p>{coche.marca}</p></td>
                                        <td><p>{coche.modelo}</p></td>
                                        <td><p>{coche.conductor}</p></td>
                                        <td><img style={{ width: "150px", height: "150px" }} src={coche.imagen} alt='' /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
