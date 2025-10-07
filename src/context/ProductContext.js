import { createContext, useState } from "react";

export const ProductContext=createContext()

export default function ProductContextProvider(props){
    const [searchTerm,setSerch]=useState('')
    const [category,setCategory]=useState('all')
    const [sortProduct,setSortProduct]=useState('none')
    return(
        <ProductContext.Provider value={{searchTerm,setSerch,category,setCategory,sortProduct,setSortProduct}}>
            {props.children}
        </ProductContext.Provider>
    )

}