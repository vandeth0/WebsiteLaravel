// import React from 'react';
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// const icon = {
//   url: require('../../../images/icon/icon paycam 50 x 50.png'),
//   scale: 1,
// };
// const containerStyle = {
//   width: '100%',
//   height: '50vh',
// };
// const labelMarker = 'label-marker';

// const center = {
//   lat: 11.593944,
//   lng: 104.849201,
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'AIzaSyAvnP5FKHVtNSxW06cwssTgpuf2oLnpqxc',
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={15}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/*1 Store ID: 8017, Name: Mey Sophat, Shop Name: SOPHART PHONE SHOP */}
//       <Marker
//         position={{ lat: 11.575091, lng: 104.851719 }}
//         icon={icon}
//         labelClass="labels"
//         label={{
//           text: 'SOPHART PHONE SHOP',
//           className: labelMarker,
//           color: '#ff9037',
//         }}
//       />
//       {/*2 Store ID: 8019, Name: Duong Ravy, Shop Name: Mlob svay */}
//       <Marker
//         position={{ lat: 11.560944, lng: 104.849223 }}
//         icon={icon}
//         label={{ text: 'Mlob svay', className: labelMarker, color: '#ff9037' }}
//       />
//       {/*3 Store ID: 8292, Name: គង់ ភូរ៉ែន (Kong Poren), Shop Name: True money */}
//       <Marker
//         position={{ lat: 11.615725, lng: 104.910185 }}
//         icon={icon}
//         label={{ text: 'True money', className: labelMarker, color: '#ff9037' }}
//       />
//       {/*4 Store ID: 8035, Name: Morm sokha, Shop Name: Lyhour (Horm Dara) */}
//       <Marker
//         position={{ lat: 11.572424, lng: 104.926264 }}
//         icon={icon}
//         label={{
//           text: 'Lyhour (Horm Dara)',
//           className: labelMarker,
//           color: '#ff9037',
//         }}
//       />
//       {/*5 Store ID: 8291, Name: Sok Kheang, Shop Name: Le kheng Phone shop */}
//       <Marker
//         position={{ lat: 11.5983793, lng: 104.874947 }}
//         icon={icon}
//         label={{
//           text: 'Le kheng Phone shop',
//           className: labelMarker,
//           color: '#ff9037',
//         }}
//       />
//       {/*6 Store ID: 8131, Name: Tev Youin, Shop Name: Grocery Store */}
//       <Marker
//         position={{ lat: 11.537781, lng: 104.819908 }}
//         icon={icon}
//         label={{
//           text: 'Grocery Store',
//           className: labelMarker,
//           color: '#ff9037',
//         }}
//       />
//       {/*7 Store ID: 8116, Name: Nhat Sreymom, Shop Name: Lottery and coffee  */}
//       <Marker
//         position={{ lat: 11.541212, lng: 104.820882 }}
//         icon={icon}
//         label={{
//           text: 'Lottery and coffee',
//           className: labelMarker,
//           color: '#ff9037',
//         }}
//       />
//       {/*8 Store ID: 8161, Name: Sor Phaneth, Shop Name: Coffee Shop */}
//       <Marker
//         position={{ lat: 11.57648, lng: 104.851333 }}
//         icon={icon}
//         label={{
//           text: 'Coffee Shop',
//           className: labelMarker,
//           color: '#ff9037',
//         }}
//       />
//       {/*9 Store ID: 8164, Name: Houn Sinda, Shop Name: Sokunthea */}
//       <Marker
//         position={{ lat: 11.544842, lng: 104.891489 }}
//         icon={icon}
//         label={{ text: 'Sokunthea', className: labelMarker, color: '#ff9037' }}
//       />
//       {/*10 Store ID: 8289, Name: Pich Panharith, Shop Name: Fruit shop */}
//       <Marker
//         position={{ lat: 11.61561, lng: 104.911684 }}
//         icon={icon}
//         label={{ text: 'Fruit shop', className: labelMarker, color: '#ff9037' }}
//       />
//       {/*11 Store ID: 8101, Name: Heng Lida, Shop Name: Ly Ly */}
//       <Marker
//         position={{ lat: 11.56057, lng: 104.861174 }}
//         icon={icon}
//         label={{ text: 'Ly Ly', className: labelMarker, color: '#ff9037' }}
//       />
//       {/*12 Store ID: 8250, Name: Chhay Bola, Shop Name: Restuarent */}
//       <Marker
//         position={{ lat: 11.569508, lng: 104.92729 }}
//         icon={icon}
//         label={{ text: 'Restuarent', className: labelMarker, color: '#ff9037' }}
//       />
//       {/*13 Store ID: 8288, Name: kang Yong hwe, Shop Name: MOA Coffee */}
//       <Marker
//         position={{ lat: 11.5856876, lng: 104.8787227 }}
//         icon={icon}
//         label={{ text: 'MOA Coffee', className: labelMarker, color: '#ff9037' }}
//       />
//       {/*14 Store ID: 8202, Name: Kong sonita, Shop Name: Jane coffee( Kong sonita) */}
//       <Marker
//         position={{ lat: 11.520334, lng: 104.7771 }}
//         icon={icon}
//         label={{
//           text: 'Jane coffee( Kong sonita)',
//           className: labelMarker,
//           color: '#ff9037',
//         }}
//       />

//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default React.memo(MyComponent);
// import React, { Component } from 'react';
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   StandaloneSearchBox,
//   Autocomplete,
// } from '@react-google-maps/api';

// export default class HeaderMap extends Component {
//   constructor(props) {
//     super(props);

//     this.autocomplete = null;

//     this.onLoad = this.onLoad.bind(this);
//     this.onPlaceChanged = this.onPlaceChanged.bind(this);

//     this.state = {
//       currentLocation: { lat: 0, lng: 0 },
//       markers: [],
//       zoom: 8,
//     };
//   }

//   componentDidMount() {
//     navigator?.geolocation.getCurrentPosition(
//       ({ coords: { latitude: lat, longitude: lng } }) => {
//         const pos = { lat, lng };
//         this.setState({ currentLocation: pos });
//       }
//     );
//   }

//   onLoad(autocomplete) {
//     console.log('autocomplete: ', autocomplete);

//     this.autocomplete = autocomplete;
//   }

//   onPlaceChanged() {
//     if (this.autocomplete !== null) {
//       let lat = this.autocomplete.getPlace().geometry.location.lat();
//       let long = this.autocomplete.getPlace().geometry.location.lat();
//     } else {
//       console.log('Autocomplete is not loaded yet!');
//     }
//   }

//   render() {
//     return (
//       <LoadScript
//         googleMapsApiKey="AIzaSyAvnP5FKHVtNSxW06cwssTgpuf2oLnpqxc"
//         libraries={['places']}
//       >
//         <GoogleMap
//           id="search-box-example"
//           mapContainerStyle={containerStyle}
//           center={this.state.currentLocation}
//           zoom={14}
//           // onDragEnd={search for centers in current location}
//         >
//           <Marker key={1} position={this.state.currentLocation} />
//           <Autocomplete
//             onLoad={this.onLoad}
//             onPlaceChanged={this.onPlaceChanged}
//           >
//             <input
//               type="text"
//               placeholder="Customized your placeholder"
//               style={inputStyles}
//             />
//           </Autocomplete>
//         </GoogleMap>
//       </LoadScript>
//     );
//   }
// }
