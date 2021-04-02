import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {

    const [events, setEvent] = useState([])
    useEffect(() => {
        fetch('https://banana-cobbler-93121.herokuapp.com/events')
        .then(response => response.json())
        .then(data => setEvent(data))
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    events.map(event => <Product event={event} key={event._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;


