// import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {

   const {price, name, imageURL, _id} = props.event
    
    return (
        <div className = "mt-5 col-md-4 text-center">
            <div className ='card'>
                <img src={imageURL} alt="poc"/>
                <div className="card-body">
                    <h4 className="name">{name}</h4>
                   <div className="d-flex justify-content-around">
                        <h2 className="price">$ {price}</h2>
                        <Link to={`/check-out/${_id}`}className='btn btn-success'>bye now</Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
