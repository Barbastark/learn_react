import React from 'react';
import { ThemeContextConsumer } from '../context/ThemeContext';
import Button from './Button';
const Header = () => {
    return (
        <ThemeContextConsumer>
            {({theme}) => (
                <header className={`${theme}-theme`} id="site-heaader">
                    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                    <Button />
                </header>
            )}
        </ThemeContextConsumer>
    );   
}

export default Header;