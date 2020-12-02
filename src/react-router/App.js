import React from 'react';

// Component imports
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
import servicesData from './mock_data/servicesData';

// Router imports
import { Link, Switch, Route } from 'react-router-dom';

const App = () => {

    const serviceLinks = servicesData.map(service => (
        <li key={service._id}>
            <Link to={`service/${service._id}`}>{service.name}</Link>
        </li>
    ));

    return(
        <div id="main-content">
            <nav id="site-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        Services 
                        <ul>
                            {serviceLinks}
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link> 
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/service/:id">
                    <Service />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </div>
    ); 
};

export default App;