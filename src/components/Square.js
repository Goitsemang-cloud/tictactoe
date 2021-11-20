import React from "react";

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>

);

const style = {
    background: "#781f10",
    border: "2px solid #2b302c",
    borderRadius: "20px",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
    color: "#5de193"
};
export default Square;
