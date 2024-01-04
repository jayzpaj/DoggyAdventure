import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
          <div className="app">
          <header className="header">
            <h1>Doggy Maze Adventure</h1>
          </header>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/Level1" className="nav-link-button">
                  Start Game
                </Link>
              </li>
              <li>
                <Link to="/InstructionPage" className="nav-link-button">
                  Instructions
                </Link>
              </li>
              <li>
                <Link to="/AboutUsPage" className="nav-link-button">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
          </div>
  );
}

export default Home;