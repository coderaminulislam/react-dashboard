import React, { useState } from 'react';
import logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { House, CreditCard } from 'lucide-react';


const Sidebar = () => {

    
    const MenuItems =[
        {id:1, name: 'Dashboard', icon:<House/>, isAactive:'dashboard', link: '/dashboard'},
        {id:2, name: 'Credit Cards', icon:<CreditCard/>, isAactive:'creditcards', link: '/creditcards'},
    ]
    const [activeMenu, setActiveMenu]=useState(MenuItems[0].isAactive);

    const activeMenuItem =(id) => {
        setActiveMenu(id)
      
    }


    return (
        <div className=' bg-white w-[250px]  px-9 py-5 shadow-lg hidden 2xl:block'>
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
            
        </div>
    );
};

export default Sidebar;