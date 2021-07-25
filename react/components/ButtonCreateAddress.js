import React from 'react'
import {Button} from 'vtex.styleguide'

const ButtonCreateAddress = ({handleCreateAddress}) => {
    return (
        <Button 
            variation="primary"
            onClick={handleCreateAddress}
        >
            Confirmar
        </Button>
    )
}

export default ButtonCreateAddress