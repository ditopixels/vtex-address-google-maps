import React from 'react'
import {Input} from 'vtex.styleguide'
import PlacesAutocomplete from 'react-places-autocomplete';

const PlacesAutoComplete = ({address,handleChange,handleSelect}) => {
    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="mb7">
                        <h2>Buscar dirección</h2>
                        <Input
                        {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'location-search-input',
                        })}
                        />
                        <div className="autocomplete-dropdown-container">
                        {loading && <div>Cargando...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                            const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' }
                            return (
                            <div
                                {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                                })}
                            >
                                <span>{suggestion.description}</span>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                )
            }
        </PlacesAutocomplete>
    )
}

export default PlacesAutoComplete