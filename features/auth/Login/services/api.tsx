import { axiosApi } from "@/services/AxiosConfig";
import { ILoginInterface } from "../interface/LoginInterface";
import axios, { AxiosResponse } from "axios";
import { ILoginTokenResponse } from "../interface/LoginTokenResponse";







export async function getLoggedIn(request:ILoginInterface):Promise<AxiosResponse<ILoginTokenResponse>>{
    try{
        console.log(request,"requrest");
        const response = await axios.post('http://laravelticketapi.local/api/admin-service/auth/login',{
            email: request.email,
            password:request.password
        });
        console.log("response",response);
        return response;
    }catch(error:unknown){
        console.log(error,"error");
        throw new Error("Network error");
    }
}