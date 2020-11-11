import React from 'react';
import { ThemeContextConsumer } from '../context/ThemeContext'; 

const FooterContainer = props => {
    return(
        <footer className={`footer ${props.theme}-theme`}>
            <div className="footer-content">
                {props.children}
            </div>
        </footer>
    );
}

export default FooterContainer;