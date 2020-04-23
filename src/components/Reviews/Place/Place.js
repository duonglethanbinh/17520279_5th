import React, { Component } from 'react';
import PlaceRender from './PlaceRender';
class Place extends Component {

    render() {
        return (
            this.props.place.map((place, i) => {
                return (
                    <PlaceRender key={i} id={this.props.place[i].id} description={this.props.place[i].description} />
                )
            })
        )
    }
}

export default Place;