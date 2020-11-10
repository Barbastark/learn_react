import React from 'react';
import Toggler from '../Toggler';

const FavoriteAltVersion = () => {
    return(
        <Toggler defaultOnValue={true}>
            {({toggle, on}) => (
                <div>
                    <h3>Click heart to favorite</h3>
                    <h1>
                        <span onClick={toggle}>
                            {on ? "❤️" : "♡"}
                        </span>
                    </h1>
                </div>  
            )}        
        </Toggler>
    );
}

export default FavoriteAltVersion;