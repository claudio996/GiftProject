import { useState } from 'react'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['ONE PUCH', 'DRAGON BALL'])

    const addCategory = () => {
        setCategories([...categories, 'CABALLEROS DEL ZODIACO']); //with spreet operator create copi of array categories  en include new element
    }

    return (
        <>
            {/*TITLE*/}
            <h1>Gif</h1>
            {/*INPUT */}
            <button onClick={addCategory}>AddCat</button>
            {/* GIF LISTS */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
                <li></li>
            </ol>
            {/*GIF ITEM */}
        </>
    )
}
