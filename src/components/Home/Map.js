import styled from 'styled-components'
import React from 'react';
import Maps from '../../assest/map.png';

const MapImage = styled.img`
width: 100%;
`

const MapContainer = styled.div`

width: 96%;

margin: 20px auto auto auto;
`
const Map = () => {
  return (
    <MapContainer>
        <MapImage src={Maps}  alt='fakemap' />
    </MapContainer>
  )
}

export default Map;