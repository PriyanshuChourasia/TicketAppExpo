import { axiosApi } from "@/services/AxiosConfig";
import { ILoginInterface } from "../interface/LoginInterface";
import { AxiosResponse } from "axios";
import { ILoginTokenResponse } from "../interface/LoginTokenResponse";







export async function getLoggedIn(request:ILoginInterface):Promise<AxiosResponse<ILoginTokenResponse>>{
    try{
        const response = await axiosApi.post('/auth/login',{
            email: request.email,
            password:request.password
        });
        return response;
    }catch(error:unknown){
        throw new Error("Network error");
    }
}