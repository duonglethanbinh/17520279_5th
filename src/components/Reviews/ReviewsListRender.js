import React, { Component } from 'react';
import ReviewsGetList from './ReviewsGetList';
//for json aldready in src
// import ReviewsList from './ReviewsList.json';
// const Location = ReviewsList.Location;

class ReviewsRender extends Component {
    state = {
        search: []
    }
    handleEvents() {
        return this.props.locationName.map((location, i) => {
            return (
                <ReviewsGetList key={i} location={location.name} onClick={this.props.onClick} />
            )
        })
    }
    render() {
        return (
            <div>
                {this.handleEvents()}
            </div>
        );
    }
}

export default ReviewsRender;