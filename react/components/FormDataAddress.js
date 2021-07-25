import React, {useState} from 'react'
import {Input} from 'vtex.styleguide'

const FormDataAddress = ({
    setForm,
    country,
    state,
    city,
    street
}) => {
    return (
        <div>
            <div className="mb5">
                <Input
                    placeholder="Country"
                    dataAttributes={{ 'hj-white-list': true, test: 'string' }}
                    label="Country"
                    onChange={e => setForm({
                        country:e.target.value,
                        state,
                        city,
                        street
                    })}
                    value={country}
                    required={true}
                />
            </div>
            <div className="mb5">
                <Input
                    placeholder="State"
                    dataAttributes={{ 'hj-white-list': true, test: 'string' }}
                    label="State"
                    onChange={e => setForm({
                        country,
                        state:e.target.value,
                        city,
                        street
                    })}
                    value={state}
                    required={true}
                />
            </div>
            <div className="mb5">
                <Input
                    placeholder="City"
                    dataAttributes={{ 'hj-white-list': true, test: 'string' }}
                    label="City"
                    onChange={e => setForm({
                        country,
                        state,
                        city:e.target.value,
                        street
                    })}
                    value={city}
                    required={true}
                />
            </div>
            <div className="mb5">
                <Input
                    placeholder="Street"
                    dataAttributes={{ 'hj-white-list': true, test: 'string' }}
                    label="Street"
                    onChange={e => setForm({
                        country,
                        state,
                        city,
                        street:e.target.value
                    })}
                    value={street}
                    required={true}
                />
            </div>
        </div>
    )
}

export default FormDataAddress