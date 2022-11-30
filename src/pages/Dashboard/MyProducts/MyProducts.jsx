import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../../contexts/AuthContext';
function MyProducts() {
    const { user } = useContext(authContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/seller/products/${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [user.email])

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Brand & Model</th>
                        <th>Milege, Seller, Current Price, New Price</th>
                        <th>Seller email & his/her statement</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, idx) => <>
                            <tr>
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
                                            <div className="font-bold">{ product.brand } ({ product.color })</div>
                                            <div className="text-sm opacity-50">{ product.model } (seats: { product.seats })</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    milege: {product.milege}, sell: { product.price }<br />
                                    seller: { product.seller }, new: { product.originalPrice }
                                    <br />
                                    <span className="badge badge-ghost badge-sm"></span>
                                </td>
                                <td>
                                    Email: { product.sellerEmail || "Not Available!"}<br/>

                                </td>
                                <th>
                                    <button className="btn btn-circle btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyProducts