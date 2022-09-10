import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories] );
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
                // onChange={ e => onInputChange(e) } da el mismo resultado, ya que se envia por defecto
                // el primer argumento de OnChange a la funcion onInputChange
            />
        </form>
    )
}
