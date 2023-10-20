import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TablaMultiplicar from './RutasParametros/TablaMultiplicar'
import NotFound from './RutasParametros/NotFound'
import Home from './RutasParametros/Home'
import { useParams } from 'react-router-dom'
export default class Router extends Component {
    render() {
        function TablaMultiplicarElement() {
            //esta funcion permite capturar los parametros
            //de la ruta de forma dinamica
            //vamos a recibir un parametro llamado minumero por ejemplo
            var { minumero } = useParams()
            return <TablaMultiplicar numero={minumero} />
        }
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={< Home />} />
                    <Route path='/tabla/:minumero' element={< TablaMultiplicarElement />} />
                    { /*rutas que no existe se accede con * */}
                    <Route path='*' element={< NotFound />} />


                </Routes>
            </BrowserRouter>
        )
    }
}
