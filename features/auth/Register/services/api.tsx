import { axiosApi } from "@/services/AxiosConfig";
import { IRegisterInterface } from "../interface/RegisterInterface";
import { AxiosResponse } from "axios";
import { IRegisterResponseInterface } from "../interface/RegisterResponseInterface";





export async function getUserRegister(request:IRegisterInterface):Promise<AxiosResponse<IRegisterResponseInterface>>{
    try{
        const response = axiosApi.post('/auth/register',request);
        return response;
    }catch(error:any){
        if(error.response && error.response.data)
        {
            const {message} = error.response.data.errors || {};
            // const status = error.response.data.code;
            throw new Error(message);
        }
        throw new Error("Network Error");
    }
}