import React, { Component } from 'react'
import image404 from '../assets/images/notfound.jpg'
export default class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={image404} alt='' style={{ width: "450px", height: "450px" }} />
                hola
            </div>
        )
    }
}
