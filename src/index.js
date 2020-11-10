import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContextProvider } from './reusability/context/context/ThemeContext';
//import App from './reusability/HOCs/App';
//import App from './reusability/render_props/App';
//import App from './reusability/HOCs/render_prop_version/App';
import App from './reusability/context/App';

import './reusability/context/css/style.css';

//ReactDOM.render(<App />, document.getElementById("root"));

// Context
ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>, 
    document.getElementById("root")
);