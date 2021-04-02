import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";


const Admin = () => {
    const [ProductEvents, setEvent] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(response => response.json())
            .then(data => setEvent(data))
    }, [])

    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImgUrl] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price
        };
        console.log(eventData)
        const url = `http://localhost:5000/addEvent`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImgUpdate = event => {
        console.log(event.target.files[0])
        const imgData = new FormData();
        imgData.set('key', '38163154d03ef2d92987b208e5835e38')
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log(watch("example"));
    const addProduct = () => {
        const addProduct = document.getElementById('add-product')
        const manageProduct =document.getElementById('manage-product')
        addProduct.style.display="block"
        manageProduct.style.display="none"
    }
    const manageProduct = () => {
        const addProduct = document.getElementById('add-product')
        const manageProduct =document.getElementById('manage-product')
        addProduct.style.display="none"
        manageProduct.style.display="block"
    }
    const HandelDelete = id => {
        console.log(id)
           fetch(`http://localhost:5000/deleteProduct/${id}`, {
               method:'DELETE'
           })
           .then(response => response.json())
           .then(result => {
               console.log('delete sussesfully')
           })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 admin-manage">
                        <button className="btn btn-primary btn-width" onClick={manageProduct}>Manage Product</button>
                        <button className="btn btn-primary btn-width" onClick={addProduct}>Add Product</button>
                        <button className="btn btn-primary btn-width" onClick={manageProduct}>Edit Product</button>
                    </div>
                    <div className="col-md-8">
                        <div id="add-product">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p>Product Name</p>
                                <input name="name" defaultValue="New Product" ref={register} /><br /><br />

                                <p>Product Price</p>
                                <input name="price" defaultValue="10" ref={register} /><br /><br />

                                <p>Product Image</p>
                                <input name="exampleRequired" type="file" onChange={handleImgUpdate} /><br /><br />


                                {errors.exampleRequired && <span>This field is required</span>}
                                <input type="submit" />
                            </form>
                        </div>
                        <div id="manage-product">
                            <li><h4 className="list-item-name">name</h4> <h4 className="list-item-price">price</h4> <h4 className="list-item-price">Total {ProductEvents.length}</h4></li>
                            {

                                ProductEvents.map(event => <li key={event.name}><h4 className="list-item-name">{event.name}</h4> <h4 className="list-item-price">{event.price}</h4> <button onClick={()=>HandelDelete(event._id)}>Delete</button></li>)

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;