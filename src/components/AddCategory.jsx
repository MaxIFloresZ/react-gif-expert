import { useState } from 'react'

export const AddCategory = ( {onNewCategory} ) => {
    const [InputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);//valor inicial
    }
    //enviar
    const onSubmit = ( event) => {
        //evitar que se refresque el evento
        event.preventDefault();
       
        if(InputValue.trim().length <= 1) return; //si tenemos mas de una caracter

        //insetamos sin perder lo anterior
        // setCategories( (Categorias) =>[ InputValue, ...Categorias])
        
        onNewCategory(InputValue.trim())//
        // limpiar nuestra caja de texto 
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gif"
                value={ InputValue }
                onChange={onInputChange}
            />
        </form>
    )
}

