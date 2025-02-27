import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import { Outlet } from 'react-router-dom';

const MasterLayout = () => {
    const[isMenuOpen, setIsMenuOpen]=useState(false)
    return (
        <div className='w-full'>
            <div className='flex relative'>
                <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                <main className='flex-1 flex-col bg-primary-bg overflow-y-scroll h-[100vh]'>
                    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                    <Outlet/>
                    
                </main>
            </div>
        </div>
    );
};

export default MasterLayout;