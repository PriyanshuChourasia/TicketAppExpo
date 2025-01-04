import { useMutation, useQuery } from "@tanstack/react-query"
import { login_query_key } from "../services/queryKey"
import { getLoggedIn } from "../services/api"
import { ILoginInterface } from "../interface/LoginInterface"
import { clearStorage, storeToken } from "@/services/AuthServices"
import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext/AuthContext"
import { useRouter } from "expo-router"






export const useGetLogin = () =>{

    const {setIsAuthenticated} = useContext(AuthContext);
    const router = useRouter();

    return useMutation({
        mutationKey:[login_query_key],
        mutationFn:(request:ILoginInterface)=>{
            return getLoggedIn(request);
        },
        retry:false,
        async onSuccess(data){
            if(data.data.data.status === 200)
            {
               await storeToken(data.data.data.access_token);
               setIsAuthenticated(true);
               router.replace('/(app)/home');
            }
            else if(data.data.error.status == 401)
            {
              clearStorage();
            }
        },
        async onError(data){
            clearStorage();
        }
    })
}