import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { authContext } from '../../../contexts/AuthContext';

function MyBookedCars() {
    const [myCars, setMyCars] = useState([]);
    const { user } = useContext(authContext);
    useEffect(() => {
        fetch(`http://localhost:4000/mybook/cars?email=${user.email}`)
            .then(res => res.json()).then(data => setMyCars(data)).catch(() => toast.error("something went wrong!"));
    }, [user.email]);
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Brand & Model</th>
                        <th>Milege, Seller, Current Price, New Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myCars.map((product, idx) => <tr key={product._id}>
                            <th>
                                {idx + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask w-12 h-12">
                                            <img src={product.picture} className="w-100 h-100" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{product.brand}</div>
                                        <div className="text-sm opacity-50">{product.model}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                milege: {product.milege}, sell: {product.price}<br />
                                seller: {product.seller}, new: {product.originalPrice}
                                <br />
                                <span className="badge badge-ghost badge-sm"></span>
                            </td>
                            <td>
                                <button className='btn bg-green-400 text-white border-0'>Pay</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyBookedCars