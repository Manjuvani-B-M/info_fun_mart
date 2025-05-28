import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/styles/viewproducts.css' // Adjust the path to your actual stylesheet

const ViewProducts = () => {
    let params = useParams()
    let productId = params.id
    console.log(params);


    let [singleProduct, setSingleProduct] = useState({})
    console.log(productId);

    useEffect(() => {
        let fetchproducts = async () => {
            let resApi = await fetch(`http://localhost:4000/products/${productId}`)
            let products = await resApi.json()
            setSingleProduct(products)
        }
        fetchproducts()
    }, [productId])
    console.log(singleProduct);


    let { title, images, brand, price, description, id } = singleProduct

    return (
        <>
            <div className="viewproducts">
                <div className="header">
                    <h1>{title}</h1>
                </div>
                <div className="container">
                    <div className="product-box">
                        <div className="image">
                            <img src={images} alt={title} />
                        </div>
                        <div className="details">
                            <div className="price">
                                <p>Price : {price}</p>
                            </div>
                            <div className="brand">
                                <p>Brand : {brand}</p>
                            </div>
                            <div className="description">
                                <p>Description : {description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProducts
