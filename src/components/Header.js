import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <Link to='/' className="navbar-brand">Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/users' className='nav-link'>Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
