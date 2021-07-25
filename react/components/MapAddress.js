import React from 'react'
import {Map, Marker} from 'google-maps-react';

const MapAddress = ({coordinateMap}) => {
    const containerStyle = {
        position: 'relative',  
        width: '100%',
        height: '100%'
    }
    return (
        <Map 
            containerStyle={containerStyle}
            google={google}
            initialCenter = {coordinateMap}
            center = {coordinateMap}
        >
            <Marker 
                position={coordinateMap}
            />
        </Map>
    )
}

export default MapAddress