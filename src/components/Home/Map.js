import styled from "styled-components";
import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const MapContainer = styled.div`
  width: 96%;
  height: 400px;
  margin: 20px auto auto auto;
`;

function MyMap() {
  //Lat and Lng values to be used in position
  const BerlinDessau = [
    
    {
      lat: 51.8364815,
      lng: 12.2441451,
      parkId: 2,
      name: "dessau",
    },
  ];

  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 51.8364815, lng: 12.2441451 }}
    >
      {BerlinDessau.map((city) => (
        <Marker key={city.parkId} position={{ lat: city.lat, lng: city.lng }} />
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(MyMap));

function Map() {
  return (
    <MapContainer className="mapContainerDiv">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${`AIzaSyBoWqoOHLWPQo0o4_K5aRo_rL39dsQBTsY`}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </MapContainer>
  );
}

export default Map;
