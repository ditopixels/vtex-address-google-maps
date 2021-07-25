import React, {useState} from 'react'
import {GoogleApiWrapper} from 'google-maps-react';
import WrapperContentForm from './components/WrapperContentForm'

const apiKey = 'AIzaSyCXKr8hyLx19FBpkPfGlwFoJ3EgxkIl37s'

const AddressFormMap = () => <WrapperContentForm/>
 
export default GoogleApiWrapper({apiKey})(AddressFormMap)
