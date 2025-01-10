import { AxiosResponse } from "axios";
import { IGroupRequestInterface } from "../interfaces/GroupRequestInterface";
import { IGroupResponseDetailsInterface, IGroupResponseInterface } from "../interfaces/GroupResponseInterface";
import { axiosApi } from "@/services/AxiosConfig";





export async function postGroupData(request:IGroupRequestInterface):Promise<AxiosResponse<IGroupResponseInterface>>{
    try{
        const response = axiosApi.post('/item_groups',request);
        return response;
    }catch(error:any){
        if(error.response && error.response.data)
        {
            const {message} = error.response.data.error || {};
            throw new Error(message);
        }
        throw new Error("Network Error");
    }
}




export async function getAllGroupDataById(user_id:string):Promise<AxiosResponse<IGroupResponseDetailsInterface>>{
    try{
        const response = axiosApi.get(`/item_groups?user_id=${user_id}`);
        return response;
    }catch(error:any){
        if(error.response && error.response.data)
        {
            const {message} = error.response.data.error || {};
            throw new Error(message);
        }
        throw new Error("Network Error");
    }
}