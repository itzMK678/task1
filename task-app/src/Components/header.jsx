import React from 'react';
import "../Components/header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header">
        <div id="right">
          <Link to="/">TASK CREATOR</Link>
        </div>

        <div id="left">
          <ul>
            <li>About</li>
            <li>Service</li>
            <li><Link to="/team">Team</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
