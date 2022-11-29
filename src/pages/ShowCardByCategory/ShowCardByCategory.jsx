import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from '../Home/BookNowModal';
import UsedCarCard from '../Home/UsedCarCard';

const ShowCardByCategory = () => {
    const [openModal, setOpenModal] = useState(true);
    const cars = useLoaderData();
    const [bookCar, setBookCar] = useState(null);
    return (
        <div className='min-h-[60vh]'>
            {
                cars.length > 0 ? <h2 className='text-xl text-green-400 font-semibold mb-2'>{ cars.length} {cars[0].category} cars are avaiables</h2>:<h2 className='text-xl text-green-400 font-semibold mb-2'>No car found!</h2>
            }
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10'>
                {
                    cars.map(car => <UsedCarCard key={car._id} setBookCar={ setBookCar } car={car} />)
                }
            </div>
            {
                bookCar && openModal &&<BookNowModal
                  setOpenModal={ setOpenModal }
                  setBookCar={setBookCar}
                  bookCar={ bookCar } />
            }
        </div>
    );
};

export default ShowCardByCategory;