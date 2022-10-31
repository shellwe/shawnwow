import React from 'react';
import Tool from "./Tool";

const Tools = (props) => {
    return (
        <section id="tools">
            <div>
            <h1>What I know</h1>
            <Tool logoFile={'adobe-animate-icon'} logoText={'Adobe Animate'}></Tool>

            </div>
            <div>
            <h1>What I am learning</h1>
            </div>
        </section>
    )
}

export default Tools;