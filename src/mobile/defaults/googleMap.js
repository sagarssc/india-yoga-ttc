import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  map: {
    position:"absolute",
    width: '50%',
    height: '50%'
  }
};


export class MapComponent extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div style={{width:"50%"}}>
        <Map
          google={this.props.google}
          zoom={17}
          style={{width:"45%", height:"100%"}}
          initialCenter={{
            lat: 30.1328558,
            lng: 78.320575,
          }}
        >
        <Marker
          onClick={this.onMarkerClick}
          name={'India Yoga TTC'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC_7tBrr739IDN1sZLAa-TIkKnXwO7TGb8",
})(MapComponent);
