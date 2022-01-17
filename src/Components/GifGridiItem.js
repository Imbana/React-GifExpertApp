import React from 'react'

const GifGridiItem = ({title,url}) => {
    console.log("Cuarto");
    return (
        <div className='card animate__animated animate__fadeInUp '>
            <img src={url} alt={title} />
            <p>{title}</p>
            
        </div>
    )
}

export default GifGridiItem
