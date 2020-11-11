import React from 'react';

const FooterRight = props => {
    return(
        <section className={`footer-component ${props.theme}-theme`}>
            <h3>En meningslös meny</h3>
            <ul>
                <li><a href="#">Link1</a></li>
                <li><a href="#">Link2</a></li>
                <li><a href="#">Link3</a></li>
                <li><a href="#">Link4</a></li>
                <li><a href="#">Link5</a></li>
            </ul>
        </section>
    ); 
}

export default FooterRight;