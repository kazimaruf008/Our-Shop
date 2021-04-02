import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import'./style.css'

const CheckOut = (props) => {
    let {_id} = useParams ();
    const [checkOut, setCheckOut] = useState([])
    useEffect(() => {
        fetch(`https://banana-cobbler-93121.herokuapp.com/events/${_id}`)
        .then(response => response.json())
        .then(data => setCheckOut(data[0]))
    }, [])
    const {name, imageURL, price} = checkOut
    return (
        <div className ="container mt-2 ">
            <div className="row text-success border-bottom mb-5">
                <div className="col-md-6"><h2>Email: {props.loginUser.email}</h2></div>
                <div className="col-md-6"><h2>Name: {props.loginUser.name}</h2></div>
            </div>
            <div className="row d-flex align-items-center border-bottom mb-2">
                <div className="col-md-4">
                    <h1>Product Image</h1>
                </div>
                <div className="col-md-4"><h3>Product Name</h3></div>
                <div className="col-md-2"><h3>price</h3></div>
                <div className="col-md-2"><h3>Quantity</h3></div>
            </div>
            <div className="row mt-5 d-flex align-items-center border-bottom">
                <div className="col-md-4">
                    <img src={imageURL} alt=""/>
                </div>
                <div className="col-md-4"><h3>{name}</h3></div>
                <div className="col-md-2"><h3>{price}</h3></div>
                <div className="col-md-2"><h3>1</h3></div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <button className="btn btn-primary p-2 mt-5">Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;