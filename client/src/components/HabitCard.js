import React from 'react';
import { Link } from 'react-router-dom';

function HabitCard({ habit }) {
  return (
    <div className="card glass-card mb-3">
      <div className="card-body">
        <h5 className="card-title">{habit.title}</h5>
        <p className="card-subtitle text-muted">{habit.subtitle}</p>
        <p className="card-text">{habit.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <small>Streak: {habit.streak}</small>
          <Link to={`/habit/${habit.id}`} className="btn btn-sm btn-outline-light">View</Link>
        </div>
      </div>
    </div>
  );
}

export default HabitCard;
