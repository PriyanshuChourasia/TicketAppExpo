import { useMutation, useQuery } from "@tanstack/react-query"
import { login_query_key } from "../services/queryKey"
import { getLoggedIn } from "../services/api"
import { ILoginInterface } from "../interface/LoginInterface"
import { clearStorage, storeToken } from "@/services/AuthServices"
import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext/AuthContext"
import { useRouter } from "expo-router"
import { Alert } from "react-native"






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
               setTimeout(() => {
               router.replace('/(app)/home');
               }, 1100);
            }
            else if(data.data.errors.status == 401)
            {
              clearStorage();
            }
        },
        async onError(error:any){
            if (error.response && error.response.data) {
                Alert.alert(error.response.data.errors.message.split('.')[0]);
            } else if (error.message) {
                console.log("Client Error:", error);
                Alert.alert(error.message,"Please check your credentials");
            } else {
                console.error("Unexpected Error:", error);
            }
            clearStorage();
        }
    })
}