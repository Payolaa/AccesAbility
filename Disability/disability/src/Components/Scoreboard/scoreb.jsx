
import React, { useContext, useState, useEffect } from 'react';
import { PointsContext } from '../Games/PointsContext';
import { FaTrophy } from 'react-icons/fa';
import "./scoreb.css";

const Scoreboard = () => {
  const { points } = useContext(PointsContext);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Use the same key from your login component
    const activeUser = localStorage.getItem('loggedInUser');
    if (activeUser) {
      try {
        const parsedUser = JSON.parse(activeUser);
        setLoggedInUser(parsedUser);
      } catch (error) {
        console.error('Error parsing logged in user:', error);
      }
    }
  }, []);

  if (!loggedInUser) {
    return (
      <div className="scoreboard">
        <p>Please log in to view your scoreboard</p>
      </div>
    );
  }

  return (
    <div className="scoreboard">
      <h2>
        <FaTrophy className="trophy-icon" /> Scoreboard
      </h2>
      <div className="user-score">
        <span className="username">{loggedInUser.username}'s Score:</span>
        <span className="score">{points}</span>
      </div>
    </div>
  );
};

export default Scoreboard;