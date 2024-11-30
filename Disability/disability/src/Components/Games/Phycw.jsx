import React, { useEffect, useRef, useState, useContext } from "react";
import { PointsContext } from "./PointsContext.jsx";
import "./crossword.css";

function Phycw() {
    const { points, setPoints } = useContext(PointsContext);
    const [timer, setTimer] = useState(0);
    const [isGameActive, setIsGameActive] = useState(true);
    const tableRef = useRef(null);
    const [current, setCurrent] = useState(null);
    const intervalRef = useRef(null);

    const ansKey = [
        "-----------E-------", "-----------MOBILITY", "-----------P-------",
        "---------A-A-------", "-------L-M-T-------", "-------O-P-H-------",
        "------INJURY-------", "-------G-T---------", "SUBSTANTIAL--------",
        "-------E-T---------", "-------R-I---------", "-------M-O---------",
        "---------N---------"
    ];

    const values = [
        "bbbbbbbbbbbwbbbbbbb", "bbbbbbbbbbbwwwwwwww", "bbbbbbbbbbbwbbbbbbb",
        "bbbbbbbbbwbwbbbbbbb", "bbbbbbbwbwbwbbbbbbb", "bbbbbbbwbwbwbbbbbbb",
        "bbbbbbwwwwwwbbbbbbb", "bbbbbbbwbwbbbbbbbbb", "wwwwwwwwwwwbbbbbbbb",
        "bbbbbbbwbwbbbbbbbbb", "bbbbbbbwbwbbbbbbbbb", "bbbbbbbwbwbbbbbbbbb",
        "bbbbbbbbbwbbbbbbbbb"
    ];

    const spansValue = { "0,11": "1", "1,11": "2", "3,9": "3", "4,7": "4", "6,6": "5", "8,0": "6" };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (current) {
                const { row, col } = current;
                const cell = getCell(row, col);
                const input = event.key.toUpperCase();
    
                if (event.keyCode >= 65 && event.keyCode <= 90) {
                    if (cell) cell.querySelector("b").innerHTML = input;
                    moveToNextCell(39); 
                }
                if (event.keyCode === 8 || event.keyCode === 46) {
                    if (cell) cell.querySelector("b").innerHTML = "";
                }
                if (event.keyCode >= 37 && event.keyCode <= 40) {
                    moveToNextCell(event.keyCode);
                }
            }
        };
    
        document.addEventListener("keydown", handleKeyDown);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [current]);
    

    const createFrameBoxes = () => {
        return values.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {row.split('').map((cell, colIndex) => {
                    const spanValue = spansValue[`${rowIndex},${colIndex}`] || "";
                    return (
                        <th
                            key={`${rowIndex}-${colIndex}`}
                            onClick={() => handleClick(rowIndex, colIndex)}
                            data-row={rowIndex}
                            data-col={colIndex}
                            className={cell}
                        >
                            <span>{spanValue}</span>
                            <b>{cell === 'w' ? '' : ''}</b> 
                        </th>
                    );
                })}
            </tr>
        ));
    };
    

    const handleClick = (row, col) => {
        if (values[row][col] === "w") {
            if (current) {
                const prevCell = getCell(current.row, current.col);
                if (prevCell) prevCell.style.backgroundColor = "transparent";
            }
            setCurrent({ row, col });
            const cell = getCell(row, col);
            if (cell) cell.style.backgroundColor = "#d3d3d3";
        }
    };


    const handleKeyUp = (event) => {
        if (current) {
            const { row, col } = current;
            const cell = getCell(row, col);

            if (event.keyCode >= 65 && event.keyCode <= 90) {
                if (cell) cell.querySelector("b").innerHTML = event.key.toUpperCase();
                moveToNextCell(39);
            }
            if (event.keyCode === 8 || event.keyCode === 46) {
                if (cell) cell.querySelector("b").innerHTML = "";
            }
            if (event.keyCode >= 37 && event.keyCode <= 40) {
                moveToNextCell(event.keyCode);
            }
        }
    };

    const moveToNextCell = (keyCode) => {
        let { row, col } = current;
    
        switch (keyCode) {
            case 37: 
                col = col > 0 ? col - 1 : col;
                break;
            case 38: 
                row = row > 0 ? row - 1 : row;
                break;
            case 39: 
                col = col < values[row].length - 1 ? col + 1 : col;
                break;
            case 40:
                row = row < values.length - 1 ? row + 1 : row;
                break;
            default:
                return;
        }
    
        if (values[row][col] === "w") {
            setCurrent({ row, col });
        }
    };
    

    const getCell = (row, col) => {
        return tableRef.current.querySelector(`tr:nth-child(${row + 1}) th:nth-child(${col + 1})`);
    };

    const keyCheck = () => {
        const allCells = tableRef.current.querySelectorAll("th.w");
        let correctAnswers = 0;

        allCells.forEach((cell) => {
            const row = parseInt(cell.getAttribute("data-row"));
            const col = parseInt(cell.getAttribute("data-col"));
            const input = cell.querySelector("b").innerHTML.toUpperCase();

            if (input && input === ansKey[row][col]) {
                cell.style.backgroundColor = "green";
                correctAnswers++;
            } else {
                cell.style.backgroundColor = "red";
            }
        });

        const totalPoints = correctAnswers * 10;
        setPoints((prevPoints) => prevPoints + totalPoints);
    };

    const clearBoard = () => {
        const allCells = tableRef.current.querySelectorAll("th.w");

        allCells.forEach((cell) => {
            cell.style.backgroundColor = "transparent";
            const text = cell.querySelector("b");
            if (text) text.innerHTML = "";
        });

        setCurrent(null);
        setTimer(0);
    };

    return (
        <section>
            <table id="table" cellSpacing="0" ref={tableRef}>
                {createFrameBoxes()}
            </table>

            <div className="across">
                <h2><i>Across</i></h2>
                <ul>
                    <li> 3. —- diagnoses include dementia, traumatic brain injury, Down syndrome, and autism. </li>
                    <li> 5. Cognitive impairment can come and go. This is often called —--- </li>
                    <li> 6. cognitive accessibility, for short </li>
                </ul>
            </div>

            <div className="down">
                <h2><i>Down</i></h2>
                <ul>
                    <li> 1. disabilities are the most common disability type. </li>
                    <li> 2. Cognitive disabilities are classified as clinical or —-----. </li>
                    <li> 3. More subtle cognitive disabilities are rooted in brain structure or —- </li>
                </ul>
            </div>

            <div className="score-time">
                <h3>Score: {points}</h3>
                <h3>Time: {timer}s</h3>
            </div>

            <div className="buttons">
                <button onClick={keyCheck} disabled={!isGameActive}>CHECK</button>
                <button onClick={clearBoard}>CLEAR</button>
            </div>
        </section>
    );
}

export default Phycw;
