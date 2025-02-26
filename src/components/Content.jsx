import React, { useEffect, useState } from 'react';

import CardSummary from './CardSummary';

import WeeklyActivity from './WeeklyActivity';
import CustomPieChart from './CustomPieChart';
import BlanceChart from './BlanceChart';
import QuickTransferCard from './QuickTransferCard';
import { cardListApi, transactionListApi } from '../ApicallList/ApiCallMethod';
import RecentTransaction from './RecentTransaction';

const Content = () => {
const[list, setList]=useState(null);

// CreditCard API Call
useEffect(()=>{
    (async()=>{
        let res = await cardListApi();
        console.log(res.data)
        setList(res.data)

    })()
},[]);


// Transaction API Call
const [recentTransaction, setRecentTransaction] = useState(null)
useEffect(()=>{
    (async()=>{
        let res = await transactionListApi();
        console.log(res.data)
        setRecentTransaction(res.data)

    })()
},[])

    return (
        <div className='bg-primary-bg w-full pb-6'>
            <div className="card_section">
                <div className="container p-9">
                   <div className=" flex flex-col lg:flex-row justify-between gap-8">
                        <div className="user_cards flex-1  ">
                            <div className="title_scection justify-between items-center flex mb-5 font-semibold font-Inter text-heading-color">
                                <h3 className="sec_title  text-[22px]">My Cards</h3>
                                <span className='text-lg'>See All</span>
                            </div>

                            <div className="cards flex flex-col md:flex-row justify-between gap-8 ">
                             
                                <CardSummary list= {list} limit={2}/>
                              
                                
                            </div>
                            
                        </div>
                        <div className="users_transaction ">
                            <h3 className='mb-5 font-semibold font-Inter text-heading-color text-[22px]'>Transctions</h3>
                            <RecentTransaction transaction={recentTransaction}/>
                            
                        </div>
                   </div>
                </div>
            </div>
            <div className="weekly_activity_scetion mb-6">
                <div className="container px-9">
                    
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 lg:col-span-8">
                        <div className="sce_title mb-5 font-semibold font-Inter text-heading-color text-[22px]">Weekly Activity</div>
                            <div className="line_chart bg-white rounded-[25px] p-6">
                                <WeeklyActivity/>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                        <div className="sce_title mb-5 font-semibold font-Inter text-heading-color text-[22px]">Expense Statistics</div>
                            <div className="circle_chart bg-white rounded-[25px] p-6">
                               <CustomPieChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="transfer_blance_history_scetion">
                <div className="container px-9">
                    
                    <div className="grid grid-cols-12 gap-4">
                        <div className="xl:col-span-4  lg:col-span-5 col-span-12">
                        <div className="sce_title mb-5 font-semibold font-Inter text-heading-color text-[22px]">Quick Transfer</div>
                            <div className="line_chart bg-white rounded-[25px] p-6 min-h-[276px] flex items-center justify-center flex-col">
                            <QuickTransferCard/>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7  xl:col-span-8">
                        <div className="sce_title mb-5 font-semibold font-Inter text-heading-color text-[22px]">Blance History</div>
                            <div className="circle_chart bg-white rounded-[25px] px-6 min-h-[276px] flex items-center justify-center">
                            <BlanceChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Content;