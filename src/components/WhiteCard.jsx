import React from 'react';
import card_black from '../assets/images/Chip_Card_black.svg';
import payment_logo from '../assets/images/payment_logo.svg';

const WhiteCard = () => {
    return (
        <div>
             <div className="mycards-1 rounded-3xl bg-white min-w-[250px] w-full text-black border-1 border-s-primary-bg">
                <div className="mycard_info p-6">
                    <div className="cards_header flex justify-between items-center">
                        <p className='font-Lato text-[12px] xl:text-sm'>Balance <span className='font-semibold block text-[16px] xl:text-[20px] leading-normal'>$5,756</span></p>
                        <img src={card_black} alt="chip-card" />
                    </div>
                    <div className="cards_body flex justify-start items-center my-7">
                        <p className='font-Lato text-sm flex-1 uppercase font-normal xl:text-[12px] text-[10px]'> <span className='opacity-70'>card holder</span> <span className='font-semibold block text-[15px] leading-normal text-black-color'>Eddy Cusuma</span></p>
                        <p className='font-Lato text-sm flex-1 uppercase font-normal text-[10px] xl:text-[12px]'> <span className='opacity-70'>VALID THRU</span> <span className='font-semibold block text-[13px] xl:text-[15px] leading-normal text-black-color'>12/22</span></p>
                    </div>
                </div>
                <div className="footer bg-gradient-to-b from-white/15 to-white/0 border-t-2 border-t-stone-200 px-6 py-5 rounded-bl-3xl rounded-br-3xl flex justify-between items-center">
                    <h3 className='font-semibold font-Lato text-[15px] xl:text-2xl'>3778 **** **** 1234</h3>
                    <img src={payment_logo} alt="" />
                 
                </div>
            </div>
        </div>
    );
};

export default WhiteCard;