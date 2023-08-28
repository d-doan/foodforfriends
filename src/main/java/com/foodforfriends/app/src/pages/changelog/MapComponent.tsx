import React, { useEffect, useState } from 'react';
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

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);

    // get user location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                },
                error => {
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            console.error("Geolocation is not available");
        }
    }, [])

    // DUMMY VALUES FOR TESTING NEARBY RESTAURANTS
    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        if (userLocation !== null) {
            const distParams = new URLSearchParams({
                lat: userLocation.lat.toString(),
                lng: userLocation.lng.toString(),
                dist: '10000'
            });

            const apiUrl = `map/nearby?${distParams}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    setRestaurants(data);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                })
            console.log(restaurants);
        }
    }, [userLocation]);

    return (
        <LoadScript googleMapsApiKey="PLACE_API_KEY_HERE">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={userLocation || center}
                zoom={18}
                onLoad={mapInstance => setMap(mapInstance)}
            >
                {userLocation && <Marker position={userLocation} />}
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
