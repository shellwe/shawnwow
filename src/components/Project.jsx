import React from 'react';

const Project = (props) => {
    return (
        <>
            <img src={'./images/logos/' + props.imageMobile + '.svg'} className='image-mobile' alt="Mobile Website Preview" />
            <img src={'./images/logos/' + props.imageDesktop + '.svg'} className='image-desktop' alt="Desktop Website Preview" />
            <p>{props.children}</p>
        </>

    )
}

export default Project;