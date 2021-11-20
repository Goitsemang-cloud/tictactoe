import React, { useState } from 'react'
import './game.css';
import Board from './Board';
import { calculateWinner } from '../helpers';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepnumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber])


    const handleClick = (i) => {
        const timeInhistory = history.slice(0, stepNumber + 1);
        const current = timeInhistory[stepNumber]
        const squares = [...current]

        if (winner || squares[i]) return;
        squares[i] = xIsNext ? 'X' : 'O';

        setHistory([...timeInhistory, squares])
        setStepnumber(timeInhistory.length)
        setXIsNext(!xIsNext);

    }

    const resetgame = (step) => {
        setStepnumber(step);
        setXIsNext(step % 2 === 0);
    }

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? move : '0';
            return (
                <li className="list" key={move}>
                    <button>{destination}</button>
                </li>
            )
        })
    )

    return (
        <div>
            <div style={styles} >
                <p className="Text"> {winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O')}</p>
            </div>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles} onClick={() => resetgame(0)}>
                {renderMoves()}
                <br />
                <button>restart</button>
            </div>
        </div>
    )
}

const styles = {
    width: '200px',
    margin: '5px auto',
}

export default Game;