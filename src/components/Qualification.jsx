import React from 'react';

// type Qualification  = {
//     qualification: string,
//     company: string,
//     category: string,
//     priority: number
// }

const Qualification = (props) => {
    return (
        <li>{props.children}</li>
        )

    }

export default Qualification;