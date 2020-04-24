import React, { Component } from 'react';
import './Reviews.css'
import ReviewsRender from './ReviewsRender';
class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationName: [],
            search: []
        };
    }
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/duonglethanbinh/Data_For_AS5/master/ReviewsList.json')
            .then(response => response.json())
            .then(data => this.setState({ locationName: data.Location }));
    }
    render() {
        const { locationName } = this.state;
        return (
            <div className="album py-5 bg" id="reviews">
             <h5 style={{textAlign:'center', margin:'10px'}}>Get into json file <a href="https://raw.githubusercontent.com/duonglethanbinh/Data_For_AS5/master/db.json">here</a></h5>
                <div className="container">
                    <div className="row">
                        {locationName.map((location, i) => {
                            return (
                                <ReviewsRender key={i} content={location.content} name={location.name} />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Reviews; 