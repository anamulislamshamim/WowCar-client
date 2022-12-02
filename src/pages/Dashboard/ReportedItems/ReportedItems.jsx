import React, { useEffect, useState } from 'react'

function ReportedItems() {
    const [reportedCars, setReportedCars] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/admin/reported/items`)
            .then(res => res.json())
            .then(carData => {
                setReportedCars(carData);
            })
    }, []);
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Car Image</th>
                        <th>Reporter Name:</th>
                        <th>Reporter Email</th>
                        <th>Car Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportedCars.map((product, idx) => <tr key={product._id}>
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
                                        <div className="text-sm opacity-50">{ product.id }</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                { product.name }
                            </td>
                            <td>
                                {product.email || "Not Available!"}<br />
                            </td>
                            <td>
                                { product.productId }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ReportedItems