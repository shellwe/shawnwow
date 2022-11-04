import React from 'react';

const Presentation = (props) => {
    return (
        <div>
            <h2>{props.presentation}</h2>
            <h3>{props.organization}</h3>
            <p><strong>{props.year}</strong></p>
            <p>{props.children}</p>
        </div>
    )
}

export default Presentation;