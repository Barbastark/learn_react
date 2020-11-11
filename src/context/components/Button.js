import React from 'react';
import { ThemeContextConsumer } from '../context/ThemeContext';

const Button = () => {
    return(
        <ThemeContextConsumer>
            {({theme, toggleTheme}) => {
                return <button
                            onClick={toggleTheme} 
                            className={`${theme}-theme`} 
                        >
                            Change to {theme === 'dark' ? 'light' : 'dark'} theme
                        </button>
            }}
        </ThemeContextConsumer>
    );
}

export default Button;