import React from 'react';
import { ThemeContextConsumer } from '../context/ThemeContext';

const Header = () => {
    return (
        <ThemeContextConsumer>
            {({theme}) => (
                <header className={`${theme}-theme`}>
                    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumer>
    );   
}

export default Header;