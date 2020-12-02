import React from 'react';
import servicesData from '../mock_data/servicesData';
import { useParams } from 'react-router-dom';

const Service = props => {
    const { id }  = useParams();
    const { name, price, description } = servicesData.find(service => service._id === id )
    
    return(
        <>
            <h1>{ name }</h1>
            <p>Price: ${ price }</p>
            <p>{ description }</p>
        </>
    );
}

export default Service; 