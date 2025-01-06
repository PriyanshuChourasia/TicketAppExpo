import { useMutation } from "@tanstack/react-query"
import { register_api_query_key } from "../services/queryKey"
import { getUserRegister } from "../services/api"
import { IRegisterInterface } from "../interface/RegisterInterface"
import { useRouter } from "expo-router"
import { Alert } from "react-native";
import Toast from "react-native-toast-message";






export const useRegister= () =>{

    const router = useRouter();

    return useMutation({
        mutationKey:[register_api_query_key],
        mutationFn:(request:IRegisterInterface)=>{
            return getUserRegister(request);
        },
        retry:false,
        onSuccess(){
            Toast.show({
                type:"success",
                text1:"User Registered",
                text2:"Now you can login",
                visibilityTime: 1500,
            })
            router.push("/(public)/login");
        },
        onError(error:any){
            if (error.response && error.response.data) {
                Alert.alert(error.response.data.error.message.split('.')[0]);
            } else if (error.message) {
                console.error("Client Error:", error.message);
            } else {
                console.error("Unexpected Error:", error);
            }
        }
    })
}