import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 32.83977013281386,
    lng: -117.27669099052993,
};


// TODO REPLACE right hand size of gmaps api key with actual key to test
// find better solution later
const MapComponent: React.FC = () => {
    return (
        <LoadScript googleMapsApiKey="REPLACE_API_HERE">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;


// code doesn't work, was autogened -> can probably make work by implementing
// api endpoint in spring for locations with marker info

// import React, { useEffect, useState } from 'react';
// import { GoogleMap, Marker } from '@react-google-maps/api';

// function MapComponent() {
//     const [mapData, setMapData] = useState<any[]>([]);

//     useEffect(() => {
//         // Fetch map data from your Spring Boot API endpoint
//         fetch('/locations')
//             .then(response => response.json())
//             .then(data => setMapData(data));
//     }, []);

//     return (
//         <div>
//             <GoogleMap
//                 center={{ lat: 0, lng: 0 }}
//                 zoom={4}
//                 mapContainerStyle={{ width: '100%', height: '500px' }}
//             >
//                 {mapData.map((marker, index) => (
//                     <Marker
//                         key={index}
//                         position={{ lat: marker.lat, lng: marker.lng }}
//                     />
//                 ))}
//             </GoogleMap>
//         </div>
//     );
// }

// export default MapComponent;
