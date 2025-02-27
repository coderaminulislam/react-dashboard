import React, { useState } from 'react';
import avatar from '../assets/images/avatar.svg';
import { BellDot, Settings, Menu } from 'lucide-react';

 const Header= ({isMenuOpen, setIsMenuOpen})=>{

    return (
        <div className=' w-full bg-white shadow-lg py-5 px-9'>
            <div className="flex justify-between items-center ">
                <button className=' xl:hidden cursor-pointer' onClick={()=> setIsMenuOpen(!isMenuOpen)}><Menu /></button>
                <h2 className='font-Inter font-semibold text-[28px] text-heading-color'>Overview</h2>
                <div className="profile_section flex justify-between items-center space-x-5">
                    <div className="search_bar hidden md:block">
                        <input type="text" placeholder='Search Something..' className='bg-primary-bg px-5 py-3 rounded-full relative ' />
                    </div>

                    <div className="settings_bar w-14 h-14 bg-primary-bg rounded-full items-center justify-center hidden md:inline-flex"><Settings /></div>
                    <div className="notification_bar w-14 h-14 bg-primary-bg rounded-full items-center justify-center md:inline-flex hidden">
                    <BellDot className='text-red-color' />
                    </div>
                    <div className="avatar">
                        <a href="#"><img src={avatar} className='w-16 h-16 rounded-full' alt="" /></a>
                    </div>
                </div>


            </div>
            <div className="search_bar md:hidden">
                <input type="text" placeholder='Search Something..' className='bg-primary-bg px-5 py-3 w-full mt-2 rounded-full relative ' />
             </div>

          
            
        </div>
    );
};

export default Header;