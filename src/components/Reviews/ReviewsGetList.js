import React, { Component } from 'react';
class ReviewsList extends Component {
    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                {/* <img className="card-img-top" onClick={this.toggleBox} src="/" alt="Card image cap" /> */}
                <div className="card-body" style={{cursor: 'pointer'}}>
                    <p className="card-text" onClick={this.props.onClick} >{this.props.location}</p>
                </div>
            </div>
        )
    }
}
export default ReviewsList;

