import { useState } from 'react';

export const GifExpertApp = () => {

const [categories, setCategories] = useState( ['One Punch']);

  return (
    <>
    {/* titulo  */} 
        <h1> GifExpertApp </h1>
    
    {/* Input  */}

    {/* Listado de Gif */}
        <ol>
            {
                categories.map( category => {
                    return <li key = {category}> Hola </li>
                
                })
            }
        </ol>    
        {/* Gif Item */}

    </>
  )
}
