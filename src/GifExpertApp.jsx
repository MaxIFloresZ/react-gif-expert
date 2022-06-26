import React, { useState } from 'react';//opcional despues de la version 17/18
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;//si existe no haga nada peor sino el sigueinte codigo
        setCategories([newCategory, ...categories])//una forma de agregar
    }
    // console.log(categories);

    return (
        <>
            <h1>GidExpertApp</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category} />
                ))
            }
        </>
    );
};