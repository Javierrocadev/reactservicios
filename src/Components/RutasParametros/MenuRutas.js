import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href='/' >Home</a></li>
                    <li><a href='/tabla/3' >Tabla Multiplicar 3</a></li>
                    <li><a href='/tabla/10' >Tabla Multiplicar 10</a></li>
                    <li><a href='/noexisto' >default</a></li>
                </ul>
            </div>
        )
    }
}
