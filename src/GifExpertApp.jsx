import { useState } from 'react';
import { AddCategory } from './components/addCategory';


export const GifExpertApp = () => {

const [categories, setCategories] = useState( ['One Punch', 'Dragon Ball']);


const onAddCategory = () => {
    setCategories([ 'NewCategory', ...categories ]);
   // setCategories( cat => [ 'NeyCategory', ...categories ]);
}

  return (
    <>
    {/* titulo  */} 
        <h1> GifExpertApp </h1>
    
    {/* Input  */}
    <AddCategory/>


    {/* Listado de Gif */}
    <button onClick={ onAddCategory }> Agregar </button>
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
