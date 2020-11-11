import React from 'react';
import Header from './components/Header';
import FooterContainer from './components/FooterContainer';
import FooterLeft from './components/footer_components/FooterLeft';
import FooterCenter from './components/footer_components/FooterCenter';
import FooterRight from './components/footer_components/FooterRight';
import SiteContent from './components/SiteContent';
import { ThemeContextConsumer } from './context/ThemeContext'; 

const App = () => {
    return (
        <div id="site-wrapper">
            <Header />
            <SiteContent>
                
            </SiteContent>
            <ThemeContextConsumer>
                {context => (
                    <FooterContainer theme={context.theme} >
                        <FooterLeft theme={context.theme}/>
                        <FooterCenter theme={context.theme}/>
                        <FooterRight theme={context.theme}/>
                    </FooterContainer>
                )}
            </ThemeContextConsumer>
        </div>
    );
} 
export default App;