import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UsedCarCard from '../Home/UsedCarCard';

const ShowCardByCategory = () => {
    const cars = useLoaderData();
    return (
        <div className='min-h-[60vh]'>
            {
                cars.length > 0 ? <h2 className='text-xl text-green-400 font-semibold mb-2'>{ cars.length} {cars[0].category} cars are avaiables</h2>:<h2 className='text-xl text-green-400 font-semibold mb-2'>No car found!</h2>
            }
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10'>
                {
                    cars.map(car => <UsedCarCard key={car._id} car={car} />)
                }
            </div>
        </div>
    );
};

export default ShowCardByCategory;