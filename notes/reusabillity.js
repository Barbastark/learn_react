/****** REUSABILLITY ******/

/**
 * **** Children ****
 * - Parent component is written in a non self-closing manner
 * - All elements between the opening -and closing tag will automatically
 *   become available in the parent component as props.children.
 * - The parent component determines how the child elements will be displayed.
 * - Good for creating generic containers that can be filled with anything.
 * 
 * **** When to use children ****
 * - When you want control over what elements will be displayed inside the parent.
 * - If component should always display the same elements a regular component with props is a better option. 
 */

 // Parent component
 function CTA(props) {
    return (
        <div className="border">
            {props.children}
        </div>
    )
 }
 
 // Children are being passed to parent component
 function App() {
    return (
        <div>
            <CTA>
                <h1>This is an important CTA</h1>
                <button>Click me now or you'll miss out!</button>
            </CTA>
        </div>
    )
 }   
 
 /**
  * ***** Higher-order Components (HOC) *****
  * - A HOC is a function that takes a component as its first argument
  *   and returns a new component that wraps the given component,
  *   providing extra capabilities to it.
  * - Starting HOC names with the word with is a common convention.
  *   E.g. withToggle indicates that the HOC adds toogle capabillities.
  * - Stems from the concept of higher-order functions.
  * - A higher order function is a function that takes another 
  *   function as a parameter.
  * - E.g. array methods like Map, Filter and Reduce.
  */

  // App.js
  import React from "react"
  import {withExtraPropAdded} from "./withExtraPropAdded"
  
  function App(props) {
      return (
          <div>Hello world!</div>
      )
  }
  
  export default withExtraPropAdded(App) // Use <App /> in index.js

  //WithExtraPropAdded HOC
  import React from "react"

  export function withExtraPropAdded(component) {
      const C = component
      return function(props) {
          return (
              <C anotherProp="Blah blah blah" {...props} />
          )
      }
  }