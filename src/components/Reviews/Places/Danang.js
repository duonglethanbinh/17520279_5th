import React, { Component } from 'react';
import PlaceRender from './PlaceRender';
import Danangimage1 from '../../../img/pics/danang1.jpg'
import Danangimage2 from '../../../img/pics/danang2.jpg'
class Danang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationName: []
        };
    }
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/duonglethanbinh/data_json_as5/master/db.json')
            .then(response => response.json())
            .then(data => this.setState({ locationName: data.DaNang })
            )
    }
    render() {
        const { locationName } = this.state;
        return (
            <div className="main_box">
               <img className="rounded mx-auto d-block" src={Danangimage1} alt="locaton" />
                {locationName.map((place, i) => {
                    return (
                        <PlaceRender key={i} id={locationName[i].id} description={locationName[i].description} />
                    )
                })}
                <img className="rounded mx-auto d-block" src={Danangimage2} alt="locaton" />
            </div>
        )
    }
}

export default Danang;