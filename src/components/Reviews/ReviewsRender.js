import React, { Component } from 'react';

class ReviewsRender extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-body">
                        <p className="card-text"><a href={`/${this.props.id}`}>{this.props.name}</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewsRender;