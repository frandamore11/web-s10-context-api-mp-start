// Create your context here
import React, {createContext}  from "react";

export const quotesContext = createContext()

const value = { 
    car: 'Toyota Celica'
}

export function QuotesProvider(props) {

    return (
        <quotesContext.Provider value ={value}>
            {props.children}
        </quotesContext.Provider>
    )
}


