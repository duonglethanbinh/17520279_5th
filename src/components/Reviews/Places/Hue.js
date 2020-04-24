import React, { Component } from 'react';
import PlaceRender from './PlaceRender';
import Hueimage1 from '../../../img/pics/hue1.jpg'
import Hueimage2 from '../../../img/pics/hue2.jpg'
class Hue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationName: []
        };
    }
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/duonglethanbinh/data_json_as5/master/db.json')
            .then(response => response.json())
            .then(data => this.setState({ locationName: data.Hue })
            )
    }
    render() {
        const { locationName } = this.state;
        return (
            <div className="main_box">
                <img className="rounded mx-auto d-block" src={Hueimage1} alt="locaton" />
                {locationName.map((place, i) => {
                    return (
                        <PlaceRender key={i} id={locationName[i].id} description={locationName[i].description} />
                    )
                })}
                <img className="rounded mx-auto d-block" src={Hueimage2} alt="locaton" />
            </div>
        )
    }
}

export default Hue;