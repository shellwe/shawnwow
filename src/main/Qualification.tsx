import React from 'react';

// type Qualification  = {
//     qualification: string,
//     company: string,
//     category: string,
//     priority: number
// }

const Qualification = (props: {children: string}) => {
    return (
        <li>{props.children}</li>
        )

    }

export default Qualification;