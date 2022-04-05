import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Customlink/Customlink';
import './Header.css'
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light py-3 ">
            <div class="container">
                <Link to='/'>Juba Shop</Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <CustomLink to='/'>Home</CustomLink>
                        </li>
                        <li class="nav-item">
                            <CustomLink to='/reviews'>Reviews</CustomLink>
                        </li>
                        <li class="nav-item">
                            <CustomLink to='/dashboards'>Dash Board</CustomLink>
                        </li>
                        <li class="nav-item">
                            <CustomLink to='/blogs'>Blogs</CustomLink>
                        </li>
                        <li class="nav-item">
                            <CustomLink to='/about'>About</CustomLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;