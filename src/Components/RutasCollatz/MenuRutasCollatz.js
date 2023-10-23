import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MenuRutasCollatz extends Component {
    render() {
        return (
            <div>
                <h1>MenuRutasCollatz</h1>
                <ul>
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/collatz/14">Collatz 14</NavLink>
                    </li>
                    <li>
                        <NavLink href="/collatz/21">Collatz 21</NavLink>
                    </li>
                    <li>
                        <NavLink href="/collatz/5">Collatz 5</NavLink>
                    </li>
                    <li>
                        <NavLink href="/tabla/14">Tabla 14</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}