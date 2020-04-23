import React, { Component, Fragment } from 'react';
import './Reviews.css';
import ReviewsListRender from './ReviewsListRender';
import ReviewsListScroll from './ReviewsListScroll';
import Place from './Place/Place'
class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationName: [],
            opened: false,
        };
        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox() {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
        });
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/duonglethanbinh/Data_For_AS5/master/ReviewsList.json')
            .then(response => response.json())
            .then(data => this.setState({ locationName: data.Location }));
    }
    render() {
        var { title } = this.props;
        const { opened } = this.state;
        const { locationName } = this.state;
        if (opened) {
            title = 'Hide';
        } else {
            title = 'Show';
        }

        return (

            <Fragment>
                <div className="reviews_content" id="reviews">
                    <h2>Reviews</h2>
                    <p>Take yourself comfortable reading our contents</p>
                    <h4>Hmm, are there any place attracted <span role="img" aria-label="thinking">🤔🤔🤔</span></h4>
                    <p>List of places which already have feedback </p>
                    <ReviewsListScroll>
                        <div className="card-columns">
                            <ReviewsListRender locationName={locationName} />
                        </div>
                    </ReviewsListScroll>
                    <h5 onClick={this.toggleBox} style={{ cursor: 'pointer' }}>Click to {title} <span role="img" aria-label="poiter">👉👉👉</span> Description of Places</h5>
                    <h5>Get into json file <a href="https://raw.githubusercontent.com/duonglethanbinh/Data_For_AS5/master/ReviewsList.json">here</a></h5>
                    {opened &&
                        locationName.map((loc, i) => {
                            return (
                                <div>
                                    <p style={{margin:'10px'}}>{loc.name}</p>
                                    <ReviewsListScroll>

                                        <Place key={i} place={loc.content} />
                                    </ReviewsListScroll>
                                </div>
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default Reviews;