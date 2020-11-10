import React from 'react';

const ExternalComponent = (props) => {
    const { loading, data, errMsg } = props;
    const style = { color: errMsg ? 'red' : 'green' };
    return(
        <p style={style}> { errMsg ? errMsg : ( loading ? 'Loading...' : JSON.stringify( data )) }  </p>
    );
}

export default ExternalComponent;