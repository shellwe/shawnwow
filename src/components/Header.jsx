import React from 'react';

const Header = (props) => {
    return (
        <>
        <h1>{props.headerText}</h1>
        <h2>{props.subHeaderText}</h2>
        </>
    )
}

export default Header;