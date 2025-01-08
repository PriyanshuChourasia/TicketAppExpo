import { AxiosResponse } from "axios";
import { IProfileInterface } from "../interface/ProfileInterface";
import { axiosApi } from "@/services/AxiosConfig";






export async function getProfileInfo():Promise<AxiosResponse<IProfileInterface>>{
    try{
        const response = axiosApi.get('/auth/profile');
        return response;
    }catch(error:any)
    {
        console.log("Error",error);
        throw new Error("Network Error");
    }
}