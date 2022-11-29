import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../contexts/AuthContext';

const BookNowModal = ({ bookCar, setBookCar }) => {
    const { user } = useContext(authContext);
    const submitHandeler=(event) => {
        event.preventDefault();
        setBookCar("");
        const form = event.target;
        console.log(form);
        const brand=form.brand.value;
        const model=form.model.value;
        const price=form.price.value;
        const email=form.email.value;
        const date = form.bookDate.value;
        const phone = form.phone.value;
        const bookData={
            carId:bookCar._id,
            brand:brand,
            model:model,
            price:price,
            email:email,
            date:date,
            phone:phone
        };
        fetch(`http://localhost:4000/used-car/booked`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(bookData)
        }).then(res => res.json())
        .then(data => {
            console.log("data:" ,data);
            console.log("bookData: ", bookData);
            toast.success("Booked successful!");
        })
        
    };
    return (
        <>
            <input type="checkbox" id="book-now-modal" className=" focus:outline-none modal-toggle" />
            <div className=" focus:outline-none modal">
                <div className=" focus:outline-none modal-box relative">
                    <label htmlFor="book-now-modal" className=" focus:outline-none btn btn-sm btn-circle absolute right-3 top-2">✕</label>
                    <form onSubmit={ submitHandeler } className='mt-10'>
                        <input readOnly type="text" name="brand" value={ bookCar.brand } className=" focus:outline-none input input-bordered w-full mb-3" />
                        <input readOnly type="text" name="model" value={ bookCar.model } className=" focus:outline-none input input-bordered w-full mb-3" />
                        <input readOnly type="text" name='price' value={ bookCar.price } className=" focus:outline-none input input-bordered w-full mb-3" />
                        <input readOnly type="email" name='email' value={ user.email } className=" focus:outline-none input input-bordered w-full mb-3" />
                        <input readOnly type='text' name='bookDate' value={ new Date().toLocaleDateString() } className=" focus:outline-none input input-bordered w-full mb-3" />
                        <input type="phone" name='phone' placeholder="phone" className=" focus:outline-none input input-bordered w-full mb-3 bg-white" />
                        <input type="submit" className="btn focus:outline-none input input-bordered w-full bg-green-400" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookNowModal;