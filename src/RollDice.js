import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    randSide = () => {
        const { sides } = this.props
        return sides[Math.floor(Math.random() * sides.length)]
    }

    state = {
        isRolling: false,
        die1: this.randSide(),
        die2: this.randSide()
    }

    startRolling = () => {
        this.setState({
            die1: this.randSide(),
            die2: this.randSide(),
            isRolling: true
        })

        setTimeout(this.stopRolling, 1000)
    }

    stopRolling = () => {
        this.setState({ isRolling: false })
    }

    render() {
        const { isRolling, die1, die2 } = this.state
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={die1} isRolling={isRolling} />
                    <Die face={die2} isRolling={isRolling} />
                </div>
                <button onClick={this.startRolling} disabled={isRolling}>
                    {isRolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice
