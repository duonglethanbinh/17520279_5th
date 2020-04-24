import React, { Component } from 'react';
import './Reviews.css'
import ReviewsRender from './ReviewsRender';
class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationName: [],
        };
    }
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/duonglethanbinh/data_json_as5/master/ReviewsList.json')
            .then(response => response.json())
            .then(data => this.setState({ locationName: data.Location }));
    }
    render() {
        const { locationName } = this.state;
        return (
            <div className="album py-5 bg" id="reviews">
                <h5 style={{ textAlign: 'center', margin: '10px' }}>Get into json file <a href="https://raw.githubusercontent.com/duonglethanbinh/data_json_as5/master/db.json">here</a></h5>
                <div className="container">
                    <div className="row">
                        {locationName.map((location, i) => {
                            return (
                                <ReviewsRender key={i} id={location.id} name={location.name} />
                            )
                        })}
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow addmore">
                                <div className="card-body">
                                    <p className="card-text">Wanna more <span role="img" aria-label="thinking">🤔🤔🤔</span> <strong>Coming soon...</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reviews; 