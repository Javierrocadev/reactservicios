import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }
    generarTabla = () => {
        var aux = []
        var num = parseInt(this.props.numero)
        for (var i = 0; i <= 10; i++) {
            var operacion = num * i
            aux.push(operacion)
        }
        this.setState({ tabla: aux })
    }
    componentDidMount = () => {
        this.generarTabla()
    }
    render() {
        return (
            <div>
                <h1>TablaMultiplicar router</h1>
                <h2 style={{ color: "blue" }}>numero:{this.props.numero}</h2>
                <ul>
                    {
                        this.state.tabla.map((num, index) => {
                            return (
                                <li key={index}>{num}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
