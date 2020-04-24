import React, { Component } from 'react';
import PlaceRender from './PlaceRender';
class Hochiminh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationName: []
        };
    }
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/duonglethanbinh/Data_For_AS5/master/db.json')
            .then(response => response.json())
            .then(data => this.setState({ locationName: data.HoChiMinh })
            )
    }
    render() {
        const { locationName } = this.state;
        return (
            <div className="main_box">
                <h1>{this.props.getNamePalce}</h1>
                {locationName.map((place, i) => {
                    return (
                        <PlaceRender key={i} id={locationName[i].id} description={locationName[i].description} />
                    )
                })}
            </div>
        )
    }
}

export default Hochiminh;