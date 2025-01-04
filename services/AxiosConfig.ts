import axios from "axios";
import { getAuthToken } from "./AuthServices";


export const axiosApi = axios.create({
    baseURL:`https://laravelticket.healnearn.com/api/admin-service`,
    headers:{
        'Content-Type':'application/json'
    }
});



axiosApi.interceptors.request.use(async (config)=>{
    const token = await getAuthToken();

    if(token)
    {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
},(error)=>{
    return Promise.reject(error);
});



axiosApi.interceptors.response.use(function (response){
    if(response.data)
    {
        return response;
    }else return Promise.reject(new Error("No data in response"));
}, function(error){
    return Promise.reject(error);
})