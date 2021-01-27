import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import GOOGLE_API_KEY from '../data/GApi';


const GoogleMap = (props) => {
  const flat = props.flat;

  const defaultMapInfo = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 12
  };

  const mapInfo = {
    center: {
      lat: flat.lat,
      lng: flat.lng
    }
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map-container" style={{ height: '100vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultZoom={defaultMapInfo.zoom}
        center={mapInfo.center.lat ? mapInfo.center : defaultMapInfo.center}
      >
        <Marker lat={flat.lat} lng={flat.lng} flat={flat} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
