import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/reviews'>Reviews</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/dashboards'>Dash Board</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/blogs'>Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;