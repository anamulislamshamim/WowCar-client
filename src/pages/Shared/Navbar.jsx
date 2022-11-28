import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';

const Navbar = () => {
    const { user } = useContext(authContext);
    console.log(user);
    const navItems = <>
        <li><Link to="/">Item 1</Link></li>
        <li><Link to="/">Item 3</Link></li>
        {
            user?<>
                <li><Link to="/">Log out</Link></li>
                <li><img src={user.photoURL} alt='' title={user.displayName} style={{"width":"2rem","height":"2rem","borderRadius":"50%"}} /></li>
            </>:<>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Sign Up</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"><span className='text-3xl text-green-400 font-semibold'>W</span>ow<span className='text-3xl text-green-400 font-semibold'>C</span>ar</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link to="/" className="btn">Get started</Link>
            </div> */}
        </div>
    );
};

export default Navbar;