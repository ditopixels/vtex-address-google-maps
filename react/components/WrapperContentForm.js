import React, {useState} from 'react'

import NEWADDRESS from '../graphql/newAddress.gql'
import {useMutation, useQuery} from 'react-apollo'

import PlacesAutoComplete from './PlacesAutoComplete'
import MapAddress from './MapAddress'

import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import FormDataAddress from './FormDataAddress'
import styles from './index.css'
import ButtonCreateAddress from './ButtonCreateAddress'

const initialMapCenter = {
    lat: 40.854885,
    lng: -88.081807
}

const WrapperCOntentForm = () =>{
    const [coordinateMap,setCoordinateMap] = useState(initialMapCenter)
    
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [countryCode, setCountryCode] = useState('')
    
    const [addAddress,{data}] = useMutation(NEWADDRESS)
    const handleChange = address => setAddress(address)
      
    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => {
                const addressResponse = results[0].formatted_address;
                for (let i = 0; i < results[0].address_components.length; i++) {
                    for (let j = 0; j < results[0].address_components[i].types.length; j++) {
                        switch (results[0].address_components[i].types[j]) {
                            case "locality":
                                setCity(results[0].address_components[i].long_name) 
                                break;
                            case "administrative_area_level_1":
                                setState(results[0].address_components[i].long_name)
                                break;
                            case "country":
                                setCountry(results[0].address_components[i].long_name)
                                setCountryCode(results[0].address_components[i].short_name)
                                break;
                            }
                    }
                }
                console.log(addressResponse);
                console.log(results[0])
                return getLatLng(results[0])
            })
            .then(latLng => {
                setAddress(address)
                setCoordinateMap(latLng)
            })
            .catch(error => console.error('Error', error));
    }

    const handleCreateAddress = () => {
        addAddress({
            variables:{
                address:{
                    country:country.substr(0,3).toUpperCase(),
                    state,
                    city
                }
            }
        })
        console.log("Data:",country.substr(0,3).toUpperCase(),state,city)
    }
    const handleForm = (data) => {
        console.log('data: ',data)
        setCountry(data.country)
        setState(data.state)
        setCity(data.city)
        setStreet(data.street)
    }
    return (
        <div className={styles.wrapperContainer}>
            <div>
                <PlacesAutoComplete
                    address={address}
                    handleChange={handleChange}
                    handleSelect={handleSelect}
                />
                <FormDataAddress 
                    country={country}
                    state={state}
                    city={city}
                    street={street}
                    setForm={handleForm}
                />
                <ButtonCreateAddress handleCreateAddress={handleCreateAddress}/>
            </div>
            <MapAddress coordinateMap={coordinateMap}/>
        </div>
    )
}

export default WrapperCOntentForm