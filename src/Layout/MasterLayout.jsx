import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import { Outlet } from 'react-router-dom';

const MasterLayout = () => {
    return (
        <div className='w-full'>
            <div className='flex'>
                <Sidebar/>
                <main className='flex-1 flex-col bg-primary-bg overflow-y-scroll h-[100vh]'>
                    <Header/>
                    <Outlet/>
                    
                </main>
            </div>
        </div>
    );
};

export default MasterLayout;