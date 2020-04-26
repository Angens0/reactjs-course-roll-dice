import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    render() {
        const { face, isRolling } = this.props
        return (
            <i className={`Die fas fa-dice-${face} ${isRolling && ' rolling'}`} />
        )
    }
}

export default Die
