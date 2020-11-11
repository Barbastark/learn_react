import React from 'react';

const FooterCenter = props => {
    return(
        <section className={`footer-component ${props.theme}-theme`}>
            <h3>Länkar</h3>
            <ul>
                <li><a href="#">Hem</a></li>
                <li><a href="#">Produkter</a></li>
                <li><a href="#">Meny</a></li>
                <li><a href="#">En annan länk</a></li>
                <li><a href="#">En till länk</a></li>
            </ul>
        </section>
    ); 
}

export default FooterCenter;