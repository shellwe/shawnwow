import React from 'react';

const Site = (props) => {
    return (
        <section id={'site' + props.shortTItle}>
            <div className='container'>
                <div className='specs'>
                    <h1>{props.title}</h1>
                    {props.children}
                </div>
                <p className='description'>{props.description}</p>
                <picture className='mac-picture'>
                    <img src={'./images/' + props.mac + '@2x.png'} alt={'preview of ' + props.title + ' on a mac'} />
                </picture>
                <picture className='iphone-picture'>
                    <img src={'./images/' + props.phone + '@2x.png'} alt={'preview of ' + props.title + ' on a phone'} />
                </picture>
            </div>
        </section>

    )
}

export default Site;