/**
 * ***** DEFAULT PROPS *****
 * - Default props are props will be used if props aren't passed to the component.
 * 
 * ***** PROP TYPES *****
 * - Prop types enables type checking for incoming props.
 * - Can also be used to tell react that some props are required
 * - Prop types is a development tool and will not show up in production. 
 * - Install prop types library: npm install prop-types 
 * - React Docs on PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */

// Class based component 
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static defaultProps = {
        cardColor: "blue",
        height: 100,
        width: 100
    }
    
    render() {
        const styles = {
            backgroundColor: this.props.cardColor,
            height: this.props.height,
            width: this.props.width
        }
        
        return (
            <div style={styles}></div>
        )
    }
}

// Functional component

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}
Card.propTypes = {
    cardColor: PropTypes.oneOf(["red", "blue"]).isRequired, //Using enum for expected values
    borderRadius: PropTypes.oneOfType([ //Using enum for expected types
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.number.isRequired,
    width: PropTypes.number
}
Card.defaultProps = {
    height: 100,
    width: 100
}
//Jugg13f0rP3ac3&&FuckF0rFun
//Återställningskod hotmail: W3X6D-8ALMB-NENGU-692CH-75P6S

