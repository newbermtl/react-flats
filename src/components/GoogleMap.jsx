import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import GOOGLE_API_KEY from '../data/GApi';


const GoogleMap = (props) => {
  const flat = props.flat;

  const defaultProps = {
    center: {
      lat: 48.864716,
      lng: 2.349014
    },
    zoom: 12
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map-container" style={{ height: '100vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={flat.lat} lng={flat.lng} flat={flat} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
