// import React, { useState } from 'react';
// import ReactMapGL, { Marker } from 'react-map-gl';
// // import mapboxgl from "mapbox-gl";
// // import "mapbox-gl/dist/mapbox-gl.css";
// // import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
// // import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

// const MapBox = ({
//   userLatitude,
//   userLongitude,
//   parkLatitude,
//   parkLongitude,
//   parkName,
// }) => {
//   const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
//   const [viewport, setViewport] = useState({
//     latitude: userLatitude,
//     longitude: userLongitude,
//     zoom: 9,
//   });

//   const parkMarker = (
//     <Marker latitude={parkLatitude} longitude={parkLongitude}>
//       <button className='py-2 px-2 bg-primary-3 rounded-7 text-primary-2'>
//         {parkName}
//       </button>
//     </Marker>
//   );

//   const userMarker = (
//     <Marker latitude={userLatitude} longitude={userLongitude}>
//       <button className='py-2 px-2 bg-primary-3 rounded-7 text-primary-2'>
//         You
//       </button>
//     </Marker>
//   );

//   return (
//     <div className='map-container'>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken={MAPBOX_TOKEN}
//         mapStyle='mapbox://styles/gmllshrn/ckvj33j018nc515o2pcsxdbdj'
//         width='100%'
//         height='500px'
//         onViewportChange={(viewport) => setViewport(viewport)}
//       >
//         {parkMarker}
//         {userMarker}
//       </ReactMapGL>
//     </div>
//   );
// };

// export default MapBox;

import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class MapBox extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-73.985664, 40.748514],
      zoom: 12,
    });
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });
    map.addControl(directions, 'top-left');
  }

  render() {
    return <div ref={(el) => (this.mapWrapper = el)} className='mapWrapper' />;
  }
}

export default MapBox;

// const MapBox = () => {
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: this.mapWrapper,
//       style: 'mapbox://styles/mapbox/streets-v10',
//       center: [-73.985664, 40.748514],
//       zoom: 12,
//     });
//     const directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//       unit: 'metric',
//       profile: 'mapbox/driving',
//     });
//     map.addControl(directions, 'top-left');
//   }, []);

//   return <div ref={(el) => (this.mapWrapper = el)} className='mapWrapper' />;
// };
