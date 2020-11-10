import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import FooterContainer from './components/FooterContainer';

const App = () => {
    return (
        <div>
            <Header />
            <Button />
            <FooterContainer>
                {() => <h1>I'm a fucking footer haha!!</h1>}
            </FooterContainer>
        </div>
    );
} 
export default App;