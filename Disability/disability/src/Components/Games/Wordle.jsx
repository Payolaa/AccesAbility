import React, { useState, useContext } from "react";
import { PointsContext } from "../Games/PointsContext";
import "./Wordle.css";

const WordleGame = ({ type, solution }) => {
  const { points, setPoints } = useContext(PointsContext);
  const [currentRow, setCurrentRow] = useState(0);
  const [tries] = useState(6);
  const [guess, setGuess] = useState("");
  const [board, setBoard] = useState(
    Array(tries)
      .fill(null)
      .map(() => Array(solution.length).fill({ letter: "", status: "" }))
  );
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    if (guess.length !== solution.length) {
      alert(`Guess must be ${solution.length} letters long.`);
      return;
    }

    const newBoard = [...board];
    const currentGuessRow = [...newBoard[currentRow]];

    let correctAnswers = 0;

    for (let i = 0; i < solution.length; i++) {
      if (guess[i] === solution[i]) {
        currentGuessRow[i] = { letter: guess[i], status: "correct" };
        correctAnswers += 10;
      } else if (solution.includes(guess[i])) {
        currentGuessRow[i] = { letter: guess[i], status: "present" };
      } else {
        currentGuessRow[i] = { letter: guess[i], status: "absent" };
      }
    }

    newBoard[currentRow] = currentGuessRow;
    setBoard(newBoard);
    setPoints((prevPoints) => prevPoints + correctAnswers);

    if (guess === solution || currentRow + 1 === tries) {
      setGameOver(true);
    } else {
      setCurrentRow((prevRow) => prevRow + 1);
    }

    setGuess("");
  };

  return (
    <div>
      <h2>{type} Wordle</h2>
      <div>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row" style={{ display: "flex" }}>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`cell ${cell.status}`}
                style={{
                  width: "30px",
                  height: "30px",
                  margin: "2px",
                  textAlign: "center",
                  lineHeight: "30px",
                  backgroundColor:
                    cell.status === "correct"
                      ? "green"
                      : cell.status === "present"
                      ? "yellow"
                      : cell.status === "absent"
                      ? "gray"
                      : "white",
                  color: "white",
                  border: "1px solid black",
                }}
              >
                {cell.letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      {!gameOver && (
        <>
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value.toUpperCase())}
            maxLength={solution.length}
          />
          <button onClick={handleGuess}>Submit Guess</button>
        </>
      )}
      {gameOver && (
        <div>
          <p>
            {guess === solution
              ? "Congratulations, you guessed it!"
              : `Game Over! The correct word was: ${solution}`}
          </p>
        </div>
      )}
      <div>
        <p>Points: {points}</p>
      </div>
    </div>
  );
};

export default WordleGame;
