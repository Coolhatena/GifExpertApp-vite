import { useState } from 'react'
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Call Of Duty' ]);

    const onAddCategory = ( newCategory ) => {
        
        if( categories.includes( newCategory ) ) return;

        setCategories([ newCategory, ...categories ])

        // El argumento por defecto de un setter de useState es el valor del estado
        // (En este caso llamado 'cat'), lo que nos permite hacer una funcion como la 
        // siguente: 
        // setCategories( cat => [...cat, 'Valorant']) 
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ value => onAddCategory( value ) } 
            />

            { 
                categories.map( ( category ) => (
                        <GifGrid 
                            key={ category } 
                            category={ category } 
                        />
                    )) 
            }
        </>
    )
}
