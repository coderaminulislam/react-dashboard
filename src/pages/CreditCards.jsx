import React, { useEffect, useState } from 'react';

import CardSummary from '../components/CardSummary';
import { cardListApi } from '../ApicallList/ApiCallMethod';



const CreditCards = () => {
const[list, setList]=useState(null);


useEffect(()=>{
    (async()=>{
        let res = await cardListApi();
        console.log(res.data)
        setList(res.data)

    })()
},[])


    return (
        <div className="w-full">
        <div className='container'>
            <div className="flex flex-row gap-x-6 py-9 px-9">
                <CardSummary list={list} />
            
            </div>
            
        </div>
        </div>
    );
};

export default CreditCards;