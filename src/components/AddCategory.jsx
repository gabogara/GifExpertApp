import React, { useState } from 'react';

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChanged = ({target}) => {
        console.log(target.value);
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    }

    return (
        <form onSubmit={  (event) => onSubmit (event) }>
            <input
                type="text"
                placeholder="buscar gifs"
                value={ inputValue }
                onChange={ onInputChanged }
            />
        </form>
    );
};
