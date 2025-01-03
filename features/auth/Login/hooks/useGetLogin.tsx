import { useMutation, useQuery } from "@tanstack/react-query"
import { login_query_key } from "../services/queryKey"
import { getLoggedIn } from "../services/api"
import { ILoginInterface } from "../interface/LoginInterface"
import { clearStorage, storeToken } from "@/services/AuthServices"






export const useGetLogin = () =>{
    return useMutation({
        mutationKey:[login_query_key],
        mutationFn:(request:ILoginInterface)=>{
            return getLoggedIn(request);
        },
        retry:false,
        onSuccess(data){
            console.log("data",data.data);
            if(data.data.data.status === 200)
            {
               storeToken(data.data.data.access_token);
            }
            else if(data.data.error.status == 401)
            {
              clearStorage();
            }
        },
        onError(data){
            console.log(data);
        }
    })
}