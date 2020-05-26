import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';

const Product = () => {

    const [productData, setProductData] = useState([]);

    let { id } = useParams();

    const getProductData = () => {
        fetch('http://localhost:4000/api/products/' + id)
        .then(res => res.json())
        .then(res => {
            setProductData(res);
        })
    };

    useEffect(getProductData, []);

    return (
        <div>
            <h1>{productData.title}</h1>
            <p>{productData.name}</p>
            <p>{productData.description}</p>
            <p>{productData.price}</p>
        </div>
    );
};

export default Product;