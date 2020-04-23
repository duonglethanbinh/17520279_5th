import React from 'react';

const ReviewsListScroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '250px',border: '1px solid #1c6861', padding:'20px', margin:'20px' }}>
            {props.children}
        </div>
    )
};

export default ReviewsListScroll;