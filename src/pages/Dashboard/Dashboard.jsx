import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';

const Dashboard = () => {
    const [userRole, setUserRole]=useState('buyer');
    const { user } = useContext(authContext);
    useEffect(() => {
        fetch(`http://localhost:4000/user/role/${ user?.email }`)
        .then(res => res.json())
        .then(data => {
            setUserRole(data.role);
        })
    }, [user?.email]);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ml-10">
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    {/* here is the rest of the content */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-orange-50 font-semibold text-xl text-green-400">
                        {
                            userRole === 'buyer' && <>
                                <li><Link to="/dashboard/my-orders">My orders</Link></li>
                            </>
                        }
                        {
                            userRole === 'seller' && <>
                                <li><Link to="/dashboard/my-buyers">My Buyers</Link></li>
                                <li><Link to="/dashboard/my-products">My Products</Link></li>
                                <li><Link to="/dashboard/add-product">Add A Product</Link></li>
                            </>
                        }
                        {
                            userRole === 'admin' && <>
                                <li><Link to="/dashboard/all-buyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/all-sellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/reported-items">Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;