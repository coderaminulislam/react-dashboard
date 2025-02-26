import React from 'react';
import batorImg from '../assets/images/bator.svg';
import { Send } from 'lucide-react';

const QuickTransferCard = () => {
    return (
        <div className='w-full'>
            <div className="quicK_avatar flex flex-row overflow-x-auto gap-6 justify-start items-center mb-10">
                <div className="quick_avatar_person text-center justify-center items-center flex flex-col">
                    <img src={batorImg} className='w-18 h-18 mb-2 rounded-full' alt="image" />
                    <p className='font-Inter text-[16px] text-black-color'>Livia Bator</p>
                    <p className='font-Inter text-[15px] text-text-color'>CEO</p>
                </div>
                <div className="quick_avatar_person text-center justify-center items-center flex flex-col">
                    <img src={batorImg} className='w-18 h-18 mb-2 rounded-full' alt="image" />
                    <p className='font-Inter text-[16px] text-black-color'>Livia Bator</p>
                    <p className='font-Inter text-[15px] text-text-color'>CEO</p>
                </div>
                <div className="quick_avatar_person text-center justify-center items-center flex flex-col">
                    <img src={batorImg} className='w-18 h-18 mb-2 rounded-full' alt="image" />
                    <p className='font-Inter text-[16px] text-black-color'>Livia Bator</p>
                    <p className='font-Inter text-[15px] text-text-color'>CEO</p>
                </div>

                
            </div>
            <div className="quicK_sendmoney flex gap-3">
                <p className='text-text-color'>Write Amount</p>
                <form className="amount_field flex flex-1 relative items-center">
                    <input type="text" className='bg-[#EDF1F7] px-2 py-3 w-full rounded-full absolute right-0 z-0 focus:outline-none'/>
                    <button className='bg-primary-color text-white px-4 py-3 rounded-full flex gap-x-2 z-10 absolute right-0'>
                        Send <Send />
                    </button>
                </form>
            </div>
            
            
        </div>
    );
};

export default QuickTransferCard;