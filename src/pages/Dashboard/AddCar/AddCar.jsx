import React from 'react';

const AddCar = () => {
    return (
        <div className='w-3/5'>
            <form>
                <input type="text" placeholder="Brand" className="input input-bordered w-full mb-3" />
                <input type="text" placeholder="Model" className="input input-bordered w-full mb-3" />
                <input type="text" placeholder="Category" className="input input-bordered w-full mb-3" />
                <input type="text" placeholder="Price" className="input input-bordered w-full mb-3" />
                <input type="text" placeholder="Original price" className="input input-bordered w-full mb-3" />
                <input type="text" placeholder="Seller" className="input input-bordered w-full mb-3" />
                <input type="file" placeholder="Picture" className="input input-bordered w-full mb-3" />
                <input type="number" placeholder="Seats" className="input input-bordered w-full mb-3" />
                <input type="text" placeholder="Color" className="input input-bordered w-full mb-3" />
                <input type="text" placeholder="Phone" className="input input-bordered w-full mb-3" />
                <input type="text" placeholder="Description" className="input input-bordered w-full mb-3" />
                <button className="btn btn-primary w-full">Add</button>
            </form>
        </div>
    );
};

export default AddCar;