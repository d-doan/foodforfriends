import React from 'react';
import MapComponent from './MapComponent';

type Props = {};

const MapPage = (props: Props) => {
  return (
    <div className="MapPage">
      Map Page
      <MapComponent />
    </div>
  );
};

export default MapPage;
