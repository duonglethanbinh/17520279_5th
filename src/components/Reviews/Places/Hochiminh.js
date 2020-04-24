import React, { Component } from 'react';
import PlaceRender from './PlaceRender';
import Hochiminhimage1 from '../../../img/pics/hochiminh1.jpg'
import Hochiminhimage2 from '../../../img/pics/hochiminh2.jpg'
class Hochiminh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationName: []
        };
    }
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/duonglethanbinh/data_json_as5/master/db.json')
            .then(response => response.json())
            .then(data => this.setState({ locationName: data.HoChiMinh })
            )
    }
    render() {
        const { locationName } = this.state;
        return (
            <div className="main_box">
                <img className="rounded mx-auto d-block" src={Hochiminhimage1} alt="locaton" />
                {locationName.map((place, i) => {
                    return (
                        <PlaceRender key={i} id={locationName[i].id} description={locationName[i].description} />
                    )
                })}
                <img className="rounded mx-auto d-block" src={Hochiminhimage2} alt="locaton" />
            </div>
        )
    }
}

export default Hochiminh;