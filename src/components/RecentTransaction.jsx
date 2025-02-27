import React from 'react';
import { CreditCard, RussianRuble, DollarSign, PieChart } from 'lucide-react';

const RecentTransaction = ({transaction}) => {

    const BaseURL = import.meta.env.VITE_IMG_URL
    return (
        <div className="transction_card bg-white w-full rounded-[25px] p-6 min-w-[250px]">
            {
                transaction && transaction.map((item, i)=>(
                    <div key={i} className="card_history flex justify-between items-center mb-3 gap-4">
                        <div className="iconbox w-[55px] h-[55px] bg-[#FFF5D9] items-center justify-center flex rounded-full">
                        
                        <CreditCard/>
                        </div>
                        <div className="iconbox_content flex-1">
                            <h3 className='font-medium font-Inter text-heading-color leading-normal text-lg mb-2'>{item.name}</h3>
                            <p className='font-Inter text-sm text-text-color'>{item.date}</p>
                        </div>
                        <div className="iconbox_amount font-medium font-Inter text-lg text-secondary-color"> + ${item.amount}</div>
    
                    </div>
                ))
            }
        
    </div> 
    );
};

export default RecentTransaction;