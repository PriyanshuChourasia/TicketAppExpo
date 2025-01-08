import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProfileInterface } from "../interface/ProfileInterface";
const profileKey = 'profile-key';




export const storeProfileData = async (value:IProfileInterface) =>{
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(profileKey,jsonValue);
    }catch(error){
        console.warn(error);
    }
}






export const getProfileData = async () =>{
    try{
        const jsonValue = await AsyncStorage.getItem(profileKey);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    }catch(error){
        console.warn(error);
    }
}