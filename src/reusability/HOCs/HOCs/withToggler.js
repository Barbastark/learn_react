import React, {Component} from "react"

/**
 * HOC is a function that takes a component as a parameter
 * and returns a new component wrapping the given component
 * and "supercharging" it by giving it some extra abilities
 */


class Toggler extends Component {
    
    state = {
        on: this.props.defaultOnValue
    }
        
    toggle = () => this.setState(prevState => ({on: !prevState.on}));
        
    render() {  
        console.log(this.props)
        // Strip of component and defaultOnValue since they're not relevant for the menu and favorite component
        const {component: C, defaultOnValue, ...props} = this.props
        return (
            <C on={this.state.on} toggle={this.toggle} {...props} />
        )
    }
}
// Takes a component and an optional configuration object as parameters
export const withToggler = (component, optionsObj) =>  props => <Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props}/>
    
//export function withToggler(component, optionsObj) {
//    return function(props) {
//        return <Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props}/>
//    }
//}





