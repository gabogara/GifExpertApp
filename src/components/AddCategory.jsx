import React from 'react';
import { useState } from 'react';



export const AddCategory = () => {
    
    const [ inputValue, setinputValue ] = useState('One Punch');

    const onInputChanged = () => {
        setinputValue('Hola Mundo');


    } 

    return (
    <input 
        type="text" 
        placeholder='buscar gif'
        value= { inputValue }    
        onChange={ onInputChanged }
    />
  )
}
