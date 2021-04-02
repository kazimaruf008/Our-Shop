import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './product.css'

const Product = (props) => {

    const [orders, setOrder] = useState()
   
    useEffect(() => {
        fetch(`http://localhost:5000/events/${props.event._id}`)
        .then(response => response.json())
        .then(data => setOrder(data))
    }, [])
   
    
    const HandelByeNow = () =>{
        console.log(orders)
    }
    return (
        <div className = "mt-5 col-md-4 text-center">
            <div className ='card'>
                <img src={props.event.imageURL} alt="poc"/>
                <div className="card-body">
                    <h4 className="name">{props.event.name}</h4>
                   <div className="d-flex justify-content-around">
                        <h2 className="price">$ {props.event.price}</h2>
                        <button className='btn btn-success' onClick={HandelByeNow}>bye now</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
