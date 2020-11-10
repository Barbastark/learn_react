import React from 'react';
import { ThemeContextConsumer } from '../context/ThemeContext'; 

const FooterContainer = props => {
    return(
        <ThemeContextConsumer>
            {({theme}) => (
                <footer className={`${theme}-theme`}>
                    { props.children() }
                </footer>
            )}
        </ThemeContextConsumer>
    );
}

export default FooterContainer;