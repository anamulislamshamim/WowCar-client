import React, { useContext } from 'react';
import { MdVerifiedUser } from "react-icons/md";
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
const UsedCarCard = ({ car, setBookCar }) => {
    const { user } = useContext(authContext);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><Link to={`/used-cars/${ car.category }`}><img src={car.picture} alt={car.model} style={{ "height": "200px" }} /></Link></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {car.model}
                    <div className="badge bg-green-400 border-none">used</div>

                </h2>
                {
                    car.varified ? <p className='flex items-center'>{car.seller} <span className='text-blue-400'><MdVerifiedUser /></span></p> : <p>{car.seller}</p>
                }
                <p>milege: {car.milege}km</p>
                <div className='flex'>
                    <p className=''>sell: ${car.price}</p>
                    <p>new: ${car.originalPrice}</p>
                </div>
                <p>{car.description.length > 100 ? car.description.slice(0, 100) + "...more" : car.description}</p>
                {
                    user && <>
                        <label onClick={ () => setBookCar(car) } htmlFor="book-now-modal" className="btn border-0 w-full mt-5 bg-green-400 text-white font-semibold">Book Now</label>
                    </>
                }
            </div>
        </div>
    );
};

export default UsedCarCard;