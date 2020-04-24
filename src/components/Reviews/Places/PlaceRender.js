import React from 'react';
import './PlaceRender.css'
const PlaceRender = ({ id, description }) => {
    return (

        <div className="paras">
            <h3>#guest{id}</h3>
            <p>{description}</p>
        </div>
    );
}

export default PlaceRender;