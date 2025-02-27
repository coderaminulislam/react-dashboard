import React from 'react';
import whiteChip from '../assets/images/Chip_Card.svg';
import card_icon from '../assets/images/card-icon.svg';
import card_black from '../assets/images/Chip_Card_black.svg';
import payment_logo from '../assets/images/payment_logo.svg';



const CardSummary = ({list, limit}) => {


    return (
        <>
        { list &&
            list.slice(0, limit).map((item, i)=>{
                
            
                const formattedValidity = item.validity ? item.validity.split("-"): ["", ""];
                const validThru =`${formattedValidity[1]}/${formattedValidity[0].slice(2)}`;
                const maskedCardNumber = item.card_number ? item.card_number.slice(0, 2) + '*'.repeat(item.card_number.length - 4) + item.card_number.slice(-2): '';
                return (
                    
                        <div key={i} className={`mycards-1 rounded-3xl  min-w-[250px] w-full  border-1 border-s-primary-bg ${i ===1 ? 'bg-white text-black': 'bg-gradient-to-r from-[#4C49ED] to-[#0A06F4] text-white'}`}>
                            <div className="mycard_info p-6">
                                <div className="cards_header flex justify-between items-center">
                                    <p className='font-Lato text-[12px] xl:text-sm'>Balance <span className='font-semibold block text-[16px] xl:text-[20px] leading-normal'>{item.balance.toLocaleString()}</span></p>
                                    <img src={i ==1 ? card_black : whiteChip } alt="chip-card" />
                                </div>
                                <div className="cards_body flex justify-start items-center my-7">
                                    
                                    <p className='font-Lato text-sm flex-1 uppercase font-normal text-[10px] xl:text-[12px]'> <span className='opacity-70'>card holder</span> <span className='font-semibold block text-[15px] leading-normal'>{item.name}</span></p>

                                    <p className='font-Lato text-sm flex-1 uppercase font-normal text-[10px] xl:text-[12px]'> <span className='opacity-70'>VALID THRU</span> <span className='font-semibold block text-[13px] xl:text-[15px] leading-normal '>{validThru}</span></p>
                                </div>
                            </div>
                            <div className={`footer bg-gradient-to-b from-white/15 to-white/0  px-6 py-5 rounded-bl-3xl rounded-br-3xl flex justify-between items-center ${i===1 ? ' border-t-stone-200 border-t-2': ""}`}>
                                <h3 className='font-semibold font-Lato text-[15px] xl:text-2xl'>{maskedCardNumber}</h3>
                                <img src={i ==1 ? payment_logo : card_icon } alt="chip-card" />
                            </div>
                        </div>
                    
                )
            }
                       
        )
    }
            
            
           
        </>

        
    );
};

export default CardSummary;