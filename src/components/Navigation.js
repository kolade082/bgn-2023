// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
    
        <li>
        <Link to="/EventCreationForm">Event Creation Form</Link>
        </li>
        <li>
        <Link to="/Calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/StudentActivityCreationForm">Student Activity Creation Form</Link>
          </li>
      </ul>
    </nav>
  );
};

export default Navigation;
