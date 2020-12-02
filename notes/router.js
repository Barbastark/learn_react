/**
 * ------------------------
 * ----- React Router -----
 * ------------------------
 * 
 *  - Not officialy a part of React but is considered the de-facto way
 *    to make SPA in React.
 *  
 *  - Conditionally render parts of the page.
 * 
 *  -- Primary components --
 *     - Routers: <BrowseRouter> and <HashRouter>
 *     - Route Matchers: <Route> and <Switch>
 *     - Navigation ("route changers"): <Link> <NavLink> <Redirect>
 * 
 *  -- Props passed to routed components --
 *     - History
 *     - Location
 *     - match
 *     - staticContext 
 *   
 *   -- Hooks provided by React Router --
 *     - useHistory
 *     - useLocation
 *          Gives you easy access to information about the
 *          location in your app (the path you're currently at)
 *     - useParams 
 *          Used to fetch parts of the url called route param.
 *     - useRoutMatch
 *         Grabs information about the way that React Router
 *         matched the route.     
 * 
 *   -- Nested Routes --
 *     - A route inside another routs
 *  
 */

 /**
  * - Import BrowserRouter and rename it to Router. 
  * 
  * - BrowserRouter is a context provider used to wrap the
  *   parts of the page that needs React Router
  */
 import {BrowserRouter as Router} from "react-router-dom"

 // Wrap entire app in a Router component
 <Router>
     <App />
 </Router>

 // Import Link
 import {Link, Switch, Route} from "react-router-dom"

 /**
  * - Link is used to route user to a different part of the page.
  * - Link is the clickable link the user will see on the page.
  * - Under the hood link renders an anchor tag.
  * - The "to" prop determines the path the user will be redirected to.
  */
 <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Switch>
        {/** 
         * --------------------------
         * ----- Switch & Route -----
         * --------------------------
         * 
         * - The switch component is similar to a JS switch statement in that it goes through the
         *   Route components one by one starting from the top until it finds a matching path matcher. 
         * 
         * - The path matcher (2) only checks if the value assigned to the "to" prop in the link starts 
         *   with the value assigned to the path matcher.   
         * 
         * - To prevent this brainless behaviour use the "exact" attribute. (1)  
         */}

        {/** 
         * --------------------
         * ----- Method 1 -----
         * --------------------
         * 
         * - Using render props (I'm anicent)
         * 
         * - Props object passed to render function
        */}

        <Route 
            exact // (1) 
            path="/" // (2)
            render={
                (props) => <h1 history={props.history}>Min fina hemsida :)</h1>  
            } 
        />

        {/**
         * --------------------
         * ----- Method 2 -----
         * --------------------
         * 
         * - Passing component to the component prop (I'm old).
         * 
         * - MyComponent receives props automatically.
         * 
         * - For passing custom props, use render props instead or simply use method 3.
         */}

        <Route exact path="/" component={MyComponent} />

        {/**
         * --------------------
         * ----- Method 3 -----
         * --------------------
         * 
         * - Passing children (I'm the new hipster on the block).
         *  
         * - Hooks are used to pass props.
         * 
         * - Using this method custom props can be passed directly to the nested component.
         *   The router props will be accessible via hooks.
         */}

        <Route exact path="/">
            <Home />
        </Route>

    </Switch>
</div>
/**
 * ---------------------------------------
 * ----- useParams and useRouteMatch -----  
 * ---------------------------------------
 * 
 * - The useParams hook is used to fetch route params from the url
 * 
 */

// ServiceList.js 
import servicesData from "./servicesData"
import {Link} from "react-router-dom"

function ServicesList() {
    const services = servicesData.map(service => (
        <h3 key={service._id}>
            {/* Dynamic links to all services */}
            <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}
        </h3>
    ))
    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

// App.js 
import { Switch, Route } from 'react-router-dom'

function App() {
    return(
        <Switch>
            {/* Add route param to path and name it slug */}
            <Route path="/services/:slug" >
                <ServiceDetail />
            </Route>
        </Switch>
    )
}

// ServiceDetail.js
import {useParams} from "react-router-dom"
import servicesData from "./servicesData"
function ServiceDetail(props) {
    // Grab slug param 
    const {slug} = useParams()
    // Grab the service with id equal to slug
    const service = servicesData.find(({_id}) => _id === serviceId)
    return (
        <h1>Service Detail Page</h1>
    )
}

/**
 * -------------------------
 * ----- useRouteMatch -----  
 * -------------------------
 * 
 * - The useRouteMatch hook is used to dynamically fetch parts
 *   of the url in nested routes. 
 * 
 * - Returns an object.
 * 
 * - The path and url properties of the returned object represents 
 *   the path leading to the current page.
 * 
 * - Use url for matching links and path for matching routes.  
 * 
 */

 /**
 * -------------------------
 * ----- useHistory -----  
 * -------------------------
 *
 *  - Returns info about the routing history.
 * 
 *  - An object that gives the developer access to stuff that lets us
 *    programatically redirect the user to different locations in the app. 
 * 
 *  - This gives us the ability to programatically go back, forward
 *    and jump to different spots in the history of the application.  
 * 
 *  - This comes in handy when you need to perform an operation before
 *    you can redirect to another page.
 * 
 *  - An example of this is when you need to perform an AJAX call and 
 *    wait for the response before the redirect takes place. 
 *
 */

import {useHistory} from 'react-router-dom'

function stupidFunction() {
    const history = useHistory()

    history.push('/redirect-to')
    //Redirects to previous location
    history.goBack()


}

 /**
 * -------------------------
 * ----- useLocation -----  
 * -------------------------
 *
 *  - Provides info about the your current path.
 * 
 *  - Pathname represents the path to the location
 *    where you're currently at.
 * 
 *  - Search represents the query string. 
 * 
 *   -- Object returned by useLocation --
 *   {
 *      pathname: "/services", 
 *      search: "?firstname=torsten&lastname=bengtsson", 
 *      hash: "", 
 *      state: null, 
 *      key: "qyfp8w"
 *   }
 */
 /**
  * --------------------
  * ----- Redirect -----
  * --------------------
  * 
  * - The redirect component redirects the user to the specified 
  *   location.
  * 
  * - Commonly used to redirect the user based on a condition, e.g.
  *   if user is not logged in redirect to login page, else render 
  *   the component.
  * 
  */

   <Redirect to="/login"/>

/** 
 *-------------------------------------
 *----- React Router props object -----
 *------------------------------------- 
{
    history: {
        length: 32, 
        action: "POP", 
        location: {
            pathname: "/", 
            search: "", 
            hash: "", 
            state: null
        }, 
        createHref: createHref(location), 
        push: push(path, state), 
        replace: replace(path, state), 
        go: go(n), 
        goBack: goBack(), 
        goForward: goForward(), 
        block: block(prompt), 
        listen: listen(listener)
    }, 
    location: {
        pathname: "/", 
        search: "", 
        hash: "", 
        state: null
    }, 
    match: {
        path: "/", 
        url: "/", 
        isExact: true, 
        params: {}
    }, 
    staticContext: null
}

*/

//https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css

/*
Conditionally render the heart and plus icons when an Image component is being hovered on

1. Icon to render for the heart:
<i className="ri-heart-line favorite"></i>

2. Icon to render for the plus:
<i className="ri-add-circle-line cart"></i>
 */

