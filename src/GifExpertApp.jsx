import { useState } from 'react';
import { AddCategory } from './components/addCategory';


export const GifExpertApp = () => {

const [ categories, setCategories ] = useState([ 'One Punch' ]);


const onAddCategory = ( newCategory ) => {
    setCategories([ newCategory, ...categories ]);
   // setCategories( cat => [ '...cat', 'Valorant' ]);
}

  return (
    <>
    {/* titulo  */} 
        <h1> GifExpertApp </h1>
    
    {/* Input  */}
    <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
    />


    {/* Listado de Gif */}
        <ol>
            {
                categories.map( category => {
                    return <li key = {category}> {category} </li>
                
                })
            }
        </ol>    
        {/* Gif Item */}

    </>
  )
}
