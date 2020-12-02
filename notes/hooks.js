

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

{
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
}

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
{
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
}

/**
 * ------------------
 * ----- useRef -----
 * ------------------
 * 
 * - Used to access a dom node and make imperative changes to it.
 * 
 */
{
    // Create new ref
    const inputRef = useRef(null)

    // Call the focus method to add focus to the element.
    inputRef.current.focus()

    // Adding refs to elements
    <input ref={inputRef} />
}
/**
 * ----------------------
 * ----- useContext -----
 * ----------------------
 */

{
    /**
     * ----------------------------------------------
     * ----- themeContext.js useContext version -----
     * ----------------------------------------------
     * 
     * 1. No need to destructure Provider and Consumer
     *    since the entire object needs to be exported.
     * 
     * 2. Since Provider isn't destructured anymore.
     * 
     * 3. Exporting entire Context object instead of
     *    exporting the Consumer.    
     */

    import React, {useState} from "react"
    const ThemeContext = React.createContext() // #1

    function ThemeContextProvider(props) {
        const [theme, setTheme] = useState("dark")
        
        function toggleTheme() {
            setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
        }
        
        return (
            <ThemeContext.Provider value={{theme, toggleTheme}}> {/* #2 */}
                {props.children}
            </ThemeContext.Provider>
        )
    }

    export {ThemeContextProvider, ThemeContext} // #3

    /**
     * ----------------------------------------
     * ----- Header.js useContext version -----
     * ----------------------------------------
     * 
     * 1. Import useContext method
     * 
     * 2. Importing entire Context object instead of the Consumer since 
     *    useContext requires the context object as a parameter.
     * 
     * 3. Pass context to useContext method
     * 
     *    3.1. Passing ThemeContext to useContext and destructure the 
     *         theme property from the object returned by themeContext
     *    3.2 Assign object returned by themeContext to variable.  
     * 
     * 4. No need for Consumer and renderProps anymore haha!        
     */

    import React, {useContext} from "react" // #1
    import {ThemeContext} from "./themeContext" // #2

    function Header(props) {
        const { theme } = useContext(ThemeContext) // alt 1 #3 
        const context = useContext(ThemeContext) // alt 2 #3.1
        return (
            /*<ThemeContextConsumer>
                {context => (*/
                    
                    // #4
                    <header className={`${theme}-theme`}> 
                        <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                    </header>

                /*)}
            </ThemeContextConsumer>*/
        )    
    }

    export default Header
}

/**
 * ------------------------
 * ----- Custom Hooks -----
 * ------------------------
 * 
 * - A pattern that has emerged and not a built-in part of react.
 * 
 * - Can be used to replace render-props, HOCs and children.
 * 
 * - Anytime you need logic to be reused across the app custom
 *   hooks can be used for that.
 * 
 */
{
    /**
     * ---------------------------
     * ----- Toggler Example -----
     * ---------------------------
     */

    // useToggler.js
    import {useState} from "react" // No need for react since no JSX is rendered

    function useToggler(defaultOnValue = false) {
        
        const [isToggledOn, setIsToggledOn] = useState(defaultOnValue)
        
        function toggle() {
            setIsToggledOn(prev => !prev)
        }
        
        return [isToggledOn, toggle]
    }

    export default useToggler

    // Favorite.js
    import React from "react"
    import useToggler from "./useToggler"

    function Favorite(props) {
        const [isFavorited, toggle] = useToggler(false)
        
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={toggle}
                    >
                        {isFavorited ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        ) 
    }

    export default Favorite
}

