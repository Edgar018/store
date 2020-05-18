import React from 'react';

const ProductForm = () => {


    const createProduct = async e => {
        e.preventDefault();
        let form = document.getElementById('form')
        let data = new FormData(form);

        await fetch('http://localhost:4000/api/products', {
            method: 'POST',
            headers: {
                'Accept': 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: data.get('author'),
                title: data.get('title'),
                description: data.get('description'),
                price: data.get('price')
            })
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }

    return(
        <div className="card card-body mt-5">
        <h1>Create Product</h1>
        <form id="form">
            <div className="form-group">
                <input className="form-control" name="author" type="text" placeholder="name"/>
            </div>
            <div className="form-group">
                <input className="form-control" name="title" type="text" placeholder="title"/>
            </div>
            <div className="form-group">
                <input className="form-control" name="description" type="text" placeholder="description"/>
            </div>
            <div className="form-group">
                <input className="form-control" name="price" type="text" placeholder="price"/>
            </div>
            <button onClick={createProduct} className="btn btn-primary btn-block">send</button>
        </form>
        </div>
    );
}

export default ProductForm; 

