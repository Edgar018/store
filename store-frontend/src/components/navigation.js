import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href="/">Store</a>
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="/create">Create Product</a>
                <a className="nav-item nav-link" href="/products">Products</a>
            </div>
        </nav>
    );
}

export default Navigation;