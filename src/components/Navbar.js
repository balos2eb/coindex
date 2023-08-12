import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './SearchBar';

const Navbar = () => {
    return (
        <nav>
            <div class="nav">
                <div class="nav-right">
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <Searchbar />
        </nav>
    );
}

export default Navbar;
