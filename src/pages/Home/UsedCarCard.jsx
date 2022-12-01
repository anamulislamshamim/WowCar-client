import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { MdVerifiedUser } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
const UsedCarCard = ({ car, setBookCar, home }) => {
    const navigate = useNavigate();
    const { user } = useContext(authContext);
    const reportHandeler = (id) => {
        if(!user){
            navigate("/login");
            toast.error("Please login first!");
            return;
        };
        const reportInfo = {
            name:user.displayName,
            email:user.email,
            productId:id
        };
        fetch(`http://localhost:4000/report`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                authorization:`bearer ${ localStorage.getItem("auth_token")}`
            },
            body:JSON.stringify(reportInfo)
        }).then(res => {
            if(res.status===200){
                res.json();
            };
            if(res.status===403){
                toast.error("You already reported this!")
            }
        })
        .then(() => {
            toast.success("Your report successfully submitted!");
        })
    };
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><Link to={`/used-cars/${car.category}`}><img src={car.picture} alt={car.model} style={{ "height": "200px" }} /></Link></figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between">
                    <div>
                        {car.model}
                        <div className="badge bg-green-400 border-none ml-3">used</div>
                    </div>
                    <button onClick={ () => reportHandeler(car._id) } className='btn hover:bg-green-400 hover:text-white btn-ghost'>Report</button>
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
                    !home && <>
                        <label onClick={() => setBookCar(car)} htmlFor="book-now-modal" className="btn border-0 w-full mt-5 bg-green-400 text-white font-semibold">Book Now</label>
                    </>
                }
            </div>
        </div>
    );
};

export default UsedCarCard;