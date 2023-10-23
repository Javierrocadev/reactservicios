import React, { Component } from 'react'
export default class MenuRutasCollatz extends Component {
    render() {
        return (
            <div>
                <h1>MenuRutasCollatz</h1>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/collatz/14">Collatz 14</a>
                    </li>
                    <li>
                        <a href="/collatz/21">Collatz 21</a>
                    </li>
                    <li>
                        <a href="/collatz/5">Collatz 5</a>
                    </li>
                    <li>
                        <a href="/tabla/14">Tabla 14</a>
                    </li>
                </ul>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/tabla/14">Tabla 14</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/collatz/21">Collatz 21</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/collatz/12">Collatz 12</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}