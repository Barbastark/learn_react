
/**
 * -----------------------------
 * ----- React Context API -----
 * -----------------------------
 * 
 * - Context provides a way to pass data through the component tree 
 *   without having to pass props down manually at every level.
 * 
 * - A state management tool.
 * 
 * - Official stable release in v.16.3
 * 
 * - Solves the problem of prop-drilling.
 * 
 * - Prop-drilling is the process of passing state as props via
 *   a bunch of components that don't need that prop, so that 
 *   it can finally reach the component that needs it.
 * 
 * ----- Provider -----
 * 
 * - A common parent between all the components is wrapped in 
 *   a provider.
 * 
 * - The data is passed to a provider using the required value prop.
 * 
 * ----- Consumer -----
 * 
 *  - All the components that need the data provided by the 
 *    parent are wrapped in a consumer.
 *  
 *  - The provider and consumer pairs allows react to create
 *    a context tunnel that leads directly to the component
 *    that is consuming the data.
 * 
 * ----- Create a new context -----
 *  
 *  - A new context is created by using the createContext method
 *    that comes with the React package.
 * 
 *  - The createContext method returns a compond component, which 
 *    means it returns an object and the provider and the consumer
 *    are properties of that ovject.
 *         
 */

 /***** Functional Component Example *****/

  /**
  * ---------------------------
  * ----- ThemeContext.js -----
  * --------------------------- 
  */

 import React, {Component} from "react"
 const {Provider, Consumer} = React.createContext()
 class ThemeContextProvider extends Component {
     state = {
         theme: "dark"
     }
     
     toggleTheme = () => {
         this.setState(prevState => {
             return {
                 theme: prevState.theme === "light" ? "dark" : "light"
             }
         })
     }
     
     render() {
         return (
             <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                 {this.props.children}
             </Provider>
         )
     }
 }

 export {ThemeContextProvider, Consumer as ThemeContextConsumer}

 /**
  * --------------------
  * ----- index.js -----
  * --------------------
  */
 import App from "./App"
 import {ThemeContextProvider} from "./themeContext"
 
 ReactDOM.render(
     /**
      * - Top level component is wrapped in a provider.
      * 
      * - This makes ThemeContext accessible from any child component
      *   of App down the component tree.
      */
     <ThemeContextProvider>
         <App />
     </ThemeContextProvider>, 
     document.getElementById("root")
 )

  /**
  * ------------------
  * ----- App.js -----
  * ------------------
  */
 import Button from "./Button"
 // Only when consumer is nessecary (passing context as props to component)
 import {ThemeContextConsumer} from "./themeContext"

 function App() {
     return (
         <div>
            {/* #1: Passing context to selected elements via props */}
            <ThemeContextConsumer>
                {context => (<Button toggleTheme={context.toggleTheme} theme={context.theme}/>) }
            </ThemeContextConsumer>
            {/* #2: Here ThemeContext is implemented in the button component and will appply to all buttons */} 
            <Button />
         </div>
     )
 }

 /**
  * ---------------------
  * ----- Button.js -----
  * ---------------------
  */

 import PropTypes from "prop-types"
 // Only needed when implemented in component
 import {ThemeContextConsumer} from "./themeContext"
 
 // #1: Context implemented in Button component
 function Button() {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )            
 }

 // #2: Button receives context as prop
 const Button = props => (
    <button onClick={ props.toggleTheme } className={`${props.theme}-theme` }>SwitchTheme</button>
) 
// Only when props apply 
Button.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
    theme: "light"
}

export default Button
