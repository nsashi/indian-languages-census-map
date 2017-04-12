import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, LayersControl, Tooltip } from 'react-leaflet';
import L from 'leaflet'

class BaseMap extends Component {
  constructor(props){
    super(props)
    this.state =  {
      lat: 39.742043,
      lng: -104.991531,
      zoom: 13,
    };
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="map-container">
        <Map
          className="map"
          center={[39.750809, -104.996810]}
          zoom={4}
          maxBounds={[[85, 100],[-85, -280]]}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom = {10}
            minZoom = {2}
          />
          <Marker position={position}>
            <Popup>
              <span>Telugu People in Denver <br/> Population: Sekhar</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default BaseMap;