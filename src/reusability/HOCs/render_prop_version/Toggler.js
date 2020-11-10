import React, {Component} from "react"

class Toggler extends Component {
    
    state = {
        on: this.props.defaultOnValue
    }
        
    toggle = () => this.setState(prevState => ({on: !prevState.on}));
        
    render() { 
    
        const returnObj = {
            on: this.state.on, 
            toggle: this.toggle
        }

        const {render = false, children = false} = this.props;
        
        return (
            render ? render(returnObj) : (children ? children(returnObj) : false)
        )
    }
}

export default Toggler;
