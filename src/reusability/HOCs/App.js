import React from 'react';
import Menu from "./components/Menu";
import Favorite from "./components/Favorite";
const App = () => {
    return(
        <div>
            <Menu />
            <hr />
            <Favorite />
        </div>
    );
}

export default App;