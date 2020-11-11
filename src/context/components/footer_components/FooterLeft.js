import React from 'react';

const FooterLeft = props => {
    return(
        <section className={`footer-no-links ${props.theme}-theme`}>
            <h3>Kontakt</h3>
            <ul>
                <li>Brynolfs Bageri</li>
                <li>Pillesnoppvägen 1</li>
                <li>186 44 Ballefjongberga</li>
                <li>Tel: 076-666 66 66</li>
                <li>E-mail: torsten@Pillesnoppvägen.com</li>
            </ul>
        </section>
    ); 
}

export default FooterLeft;