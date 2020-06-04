import React from 'react';

const Banner = () => {
    return (
        <div 
            style={{backgroundColor: "#0AACEF"}}
            className="d-flex align-items-center p-5">
            <div className="text-center text-light size-5">
                <h2 className="h1">Lorem, ipsum</h2>
                <p className="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quos numquam officiis consequuntur atque voluptate.</p>
            </div>
            <img 
            height="300" 
            width="50%" 
            src="../../images/banner.svg" 
            alt="store"/>
        </div>
    )
}

export default Banner;