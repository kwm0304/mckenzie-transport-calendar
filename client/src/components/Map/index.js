import React, { useMemo, useState, useRef } from 'react';
import {
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
    useJsApiLoader
} from '@react-google-maps/api';
import { FaTimes } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

export default function InitMap() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })
    // eslint-disable-next-line no-undef
    const directionsRenderer = new google.maps.DirectionsRenderer();
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    /**@type React.MutableRefObject<HTMLInputElement */
    const originRef = useRef();
    /**@type React.MutableRefObject<HTMLInputElement */
    const destinationRef = useRef();

    const [map, setMap] = useState(/**@type google.maps.Map*/(null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    if (!isLoaded) return <div>Loading...</div>
   
   directionsRenderer.setMap(map);
   directionsRenderer.setPanel(document.querySelector('sidebar'))

async function calculateAndDisplayRoute (directionsRenderer, directionsService) {
    //once origin and destination are the same, clear route
    if (originRef.current.value === '' || destinationRef.current.value === ''){
        return
    }
    const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
}

const clearRoute = () => {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = '';
    destinationRef.current.value = '';
}
    return (
        <Container>
            <div className='btn-route-row'>
                <button type='submit' color='blue' onClick={calculateAndDisplayRoute}>Calculate Route</button>
                <button type='submit' onClick={clearRoute}><FaTimes /></button>
            </div>
            <div>
            <p>Distance: {distance}</p>
            <p>Duration: {duration}</p>
            </div>
            <Row className='input-route-row'>
                    <Autocomplete>
                        <input type='text' placeholder='origin' ref={originRef}></input>
                        <input type='text' placeholder='destination' ref={destinationRef}></input>
                    </Autocomplete>
            </Row>
            <Row className='sidebar'></Row>
        </Container>
    )
}