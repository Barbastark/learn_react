import React from 'react';
import ReactDOM from 'react-dom';
//import { ThemeContextProvider } from './context/context/ThemeContext';
//import App from './reusability/HOCs/App';
//import App from './reusability/render_props/App';
//import App from './reusability/HOCs/render_prop_version/App';
//import App from './context/App';
//import './context/css/style.css';
/* Speed Typing Game */
import App from './projects/speed_typing_game/App';
import './projects/speed_typing_game/css/style.css';

ReactDOM.render(<App />, document.getElementById("root"));

// Context
//ReactDOM.render(
//    <ThemeContextProvider>
//        <App />
//    </ThemeContextProvider>, 
//    document.getElementById("root")
//);