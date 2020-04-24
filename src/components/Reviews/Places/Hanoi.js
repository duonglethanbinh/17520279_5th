import React, { Component } from 'react';
import PlaceRender from './PlaceRender';
import Hanoiimage1 from '../../../img/pics/hanoi1.jpg'
import Hanoiimage2 from '../../../img/pics/hanoi2.jpg'
class Hanoi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationName: []
        };
    }
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/duonglethanbinh/data_json_as5/master/db.json')
            .then(response => response.json())
            .then(data => this.setState({ locationName: data.HaNoi })
            )
    }
    render() {
        const { locationName } = this.state;
        return (
            <div className="main_box">
                <img className="rounded mx-auto d-block" src={Hanoiimage1} alt="locaton" />
                {locationName.map((place, i) => {
                    return (
                        <PlaceRender key={i} id={locationName[i].id} description={locationName[i].description} />
                    )
                })}
                <img className="rounded mx-auto d-block" src={Hanoiimage2} alt="locaton" />
            </div>
        )
    }
}

export default Hanoi;