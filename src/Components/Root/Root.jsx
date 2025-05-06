import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Root.css'

const Root = () => {
    return (
        <div className='bgImg'>
            <div className='bg-sky-200/70'>
                <Navbar></Navbar>
                <div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;