import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

const navBar = () => {
    return (
        <nav className="nav d-flex justify-content-between">
            <Link to="/world">World</Link>
            <Link to="/us">U.S</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/design">Design</Link>
            <Link to="/culture">Culture</Link>
            <Link to="/business">Business</Link>
            <Link to="/politics">Politics</Link>
            <Link to="/opinion">Opinion</Link>
            <Link to="/science">Science</Link>
            <Link to="/health">Health</Link>
            <Link to="/style">Style</Link>
            <Link to="/travel">Travel</Link>
        </nav>
    );
};

export default navBar;