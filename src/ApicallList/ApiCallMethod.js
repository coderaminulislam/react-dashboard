import axios from "axios"

const BaseUrl = 'http://inertia-pos.manirul.xyz/api'


export async function cardListApi(params) {
    let res = await axios.get(BaseUrl + '/card-list');
    if(res.status === 200){
        return res.data;
    } else{
        return []
    }
}

export async function transactionListApi(params) {
    let res = await axios.get(BaseUrl + '/recent-transactions-list');
    if(res.status=== 200){
        return res.data;
    } else{
        return [];
    }
    
}

export async function WeeklyActivityApi(params) {
    let res = await axios.get(BaseUrl + '/weekly-activity-list');
    if(res.status === 200){
        return res.data;
    } else{
        return []
    }
    
}

export async function pieChartApi(params) {
    let res = await axios.get(BaseUrl + '/expense-list');
    if(res.status === 200){
        return res.data;
    } else{
        return []
    }
    
}