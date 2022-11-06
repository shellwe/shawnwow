import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <>
        <h1>{props.headerText}</h1>
        <h2>{props.subHeaderText}</h2>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
        </nav>
        </>
    )
}

export default Header;