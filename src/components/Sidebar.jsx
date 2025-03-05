import React, { useState } from 'react';
import logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { House, CreditCard, ArrowBigLeft } from 'lucide-react';

  
const Sidebar = ({isMenuOpen, setIsMenuOpen}) => {

    
    const MenuItems =[
        {id:1, name: 'Dashboard', icon:<House/>, isAactive:'dashboard', link: '/'},
        {id:2, name: 'Credit Cards', icon:<CreditCard/>, isAactive:'creditcards', link: '/creditcards'},
    ]
    const [activeMenu, setActiveMenu]=useState(MenuItems[0].isAactive);

    const activeMenuItem =(id) => {
        setActiveMenu(id)
      
    }


    return (
        <aside className={` bg-white h-screen px-9 py-5 w-[250px] shadow-lg xl:block xl:relative transition-all ease-in-out ${isMenuOpen ? "block absolute left-0 top-0 z-20  ": "hidden"}`}>
            <a href="">
               <img src={logo} alt="" />
            </a>

            <nav className="sidebar_nav mt-20">
                <ul className='space-y-6'>
                    {
                        MenuItems.map((item)=>(
                            <li key={item.id}><Link className={`flex gap-x-6 items-center font-Inter font-medium ${  activeMenu === item.isAactive ? 'text-primary-color': 'hover:text-primary-color text-gray-500'}` } onClick={()=>activeMenuItem(item.isAactive)} to={item.link}> {item.icon} {item.name}  </Link></li>
                        ))
                    }       
                </ul>
            </nav>

            <button className='absolute -right-3 top-24 text-white z-10 shadow-lg xl:hidden bg-primary-color w-8 h-8 rounded-full text-sm flex items-center justify-center cursor-pointer' onClick={()=>setIsMenuOpen(false)}><ArrowBigLeft /></button>
            
        </aside>
    );
};

export default Sidebar;