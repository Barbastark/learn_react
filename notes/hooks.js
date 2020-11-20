

/**
 * --------------------
 * ----- useState -----
 * --------------------
 * 
 * - The useState method hooks into the state from a functional component.
 * 
 * - Returnn an array containing state and a  function used to manipulate state.
 * 
 * - The function is used to manipulate state.  
 */

/***** Example using primitive data types *****/

/* 
Array destructuring is used to strip of state and set count function 
from the array returned by useState. 
*/
const [count, setCount] = useState(0)

function increment() {
    // setCount is used to increace the value of count by 1
    setCount(prevCount => prevCount + 1)
}


/***** Example using complex data types *****/
import React, {useState} from "react"

function App() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])
    
    function handleChange(e) {
        const {name, value} = e.target
        setInputData(prevInputData => (
            {...prevInputData, [name]: value}
        ))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        setContactsData(prevContacts => [...prevContacts, inputData])
    }
    
    const contacts = contactsData.map((contact, i) => <h2 key={i}>{contact.firstName} {contact.lastName}</h2>)
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Last Name"
                    name="lastName" 
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add contact</button>
            </form>
            {contacts}
        </>
    )
}

export default App

/**
 * ---------------------
 * ----- useEffect -----
 * ---------------------
 * 
 * - useEffect is considered a replacement for the lifecycle methods
 *   componentDidMount, componentDidUpdate and componentWillUnmount.
 * 
 * - It's a hook that allows us to produce side effects in our components.
 * 
 * -- Side Effects --
 *   - anything that reaches outside of the component to do something.
 *   - E.g. Network requests, manual DOM manipulation, event listeners
 *     timeounts and intervals. 
 * 
 * - Takes two aruments, a callback function and an array.
 * 
 * - The callback determines what to be done when useEffect is called.
 * 
 * - The array contains the variables to watch for changes in. This 
 *   prevents the rerender of the component from entering an infinite
 *   loop.    
 */

useEffect(() => {
    const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000)
    // Cleanup function. Will run when component is about to unmount. 
    return () => clearInterval(intervalId) 
}, []) // Passing empty array useEffect will only run once when the component mounts to the screen

useEffect(() => {
    setColor(randomcolor())
}, [count]) // Watches for changes in count variable. useEffect will run everytime count changes. 
