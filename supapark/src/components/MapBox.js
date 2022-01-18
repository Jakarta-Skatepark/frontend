import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { Link } from 'react-router-dom';
// import HaversineFormula from './HaversineFormula';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; /* eslint import/no-webpack-loader-syntax: off */

class MapBox extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [this.props.userLongitude, this.props.userLatitude],
      zoom: 15,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
      interactive: true,
      controls: {
        inputs: false,
        instructions: true,
        profileSwitcher: true,
      },
      language: 'id',
    });

    map.addControl(directions, 'bottom-right');
    directions.setOrigin([this.props.userLongitude, this.props.userLatitude]);
    directions.setDestination([
      this.props.parkLongitude,
      this.props.parkLatitude,
    ]);
  }

  // jarak = HaversineFormula(
  //   this.props.userLatitude,
  //   this.props.userLongitude,
  //   this.props.parkLatitude,
  //   this.props.userLongitude
  // );

  render() {
    return (
      <div ref={(el) => (this.mapWrapper = el)} className='mapWrapper'>
        <div>
          <Link
            to='/'
            className='text-primary-2 bg-primary-3 px-6 py-6 text-8 radius-100 close-directions'
          >
            <img src='/close.svg' alt='' />
          </Link>
        </div>
        {/* <div className='jarak-rute text-7'>{this.jarak} km</div> */}
      </div>
    );
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
