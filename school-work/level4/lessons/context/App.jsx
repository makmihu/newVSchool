import React, {useState} from "react"
import Button from './Button';
import Header from './Header';
import {ThemeContextProvider} from "./themeContext"

function App(props) {

    
    return (
        <>
            <ThemeContextProvider>
                <Header/>
                <Button/>
            </ThemeContextProvider>
        </>
    );
}

export default App;