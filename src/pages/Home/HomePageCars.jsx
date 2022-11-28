import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UsedCarCard from './UsedCarCard';

const HomePageCars = () => {
    const [carData, setCarData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/home/usedCar`)
            .then(res => res.json())
            .then(data => setCarData(data))
    }, []);
    return (
        <div className='my-10'>
            <h1 className='mb-5 text-3xl font-semibold lg:pl-0 pl-3'>Here is your <span className='text-green-400 font-semibold'>Car!</span></h1>
            <div className='flex gap-5 mb-5 font-bold text-2xl'>
                <Link to="/used-cars/sports">Sports</Link>
                <Link to="/used-cars/luxury">Luxury</Link>
                <Link to="/used-cars/family">Family</Link>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    carData.map(car => <UsedCarCard key={ car._id } car={ car } />)
                }
            </div>
        </div>
    );
};

export default HomePageCars;