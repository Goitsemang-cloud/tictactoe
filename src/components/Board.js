import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
    <div style={board}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
);

const board = {
    border: "4px solid #2b302c",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "10% auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

export default Board;

