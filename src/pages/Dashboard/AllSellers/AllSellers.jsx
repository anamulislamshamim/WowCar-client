import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function AllSellers() {
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/all/sellers")
            .then(res => res.json())
            .then(data => {
                setSellers(data);
            })
            .catch(err => {
                toast.error("Something went wrong!");
            });
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, idx) => <>
                            <tr>
                                <th>{idx + 1}</th>
                                <td>{seller.name} </td>
                                <td>{seller.email}</td>
                                <td><button className="btn btn-circle btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button></td>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllSellers