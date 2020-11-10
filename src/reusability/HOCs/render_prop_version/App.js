import React from 'react';
import Menu from "./components/Menu";
import Favorite from "./components/Favorite";
import Toggler from "./Toggler"
import FavoriteAltVersion from './components/FavoriteAltVersion';
const App = () => {
    return(
        <div>
            <Menu />
            <hr />
            <Toggler 
                defaultOnValue={false}
                render={
                        ({toggle, on}) => (
                            <Favorite toggle={toggle} on={on}/>
                        )
                    }
            />
            <hr />
            <FavoriteAltVersion />
        </div>
    );
}

export default App;