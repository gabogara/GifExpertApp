import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState();

    const onInputChanged = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        
        if ( inputValue.trim().length <= 1) return;

        //setCategories ( categories => [inputValue, ...categories ] );
        onNewCategory ( inputValue.trim() );
        setInputValue ('');
        
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
