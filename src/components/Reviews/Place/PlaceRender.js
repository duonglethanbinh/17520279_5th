import React from 'react';

const PlaceRender = ({ id, description }) => {
    return (
        <div className="main_box">
            <div className="spacerReviews"></div>
            <div className="paras">
                <h3>#guest{id}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default PlaceRender;