import React from 'react';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col md:flex-row-reverse justify-between">
                <div className='md:w-3/5'>
                    <img src="https://www.ccarprice.com/products/Porsche_911_Carrera_S_2021.jpg" alt='' className="w-full rounded-lg " style={{"height":"400px"}} />
                </div>
                <div className='md:w-2/5'>
                    <h1 className="text-5xl font-bold">Welcome to WowCar</h1>
                    <p className="py-6">The free, easy way to change your car online. WowCar is the most reliable platform to exchange, buy a new car or sell the older car. We are here to give you any information about car. Thanks for being with us!</p>
                    <p><button className="btn bg-green-400 border-0 w-3/5 rounded mb-5">Sell my car</button></p>
                    <p><button className="btn bg-green-400 border-0 w-3/5 rounded">Buy a car</button></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;