import AsyncStorage from "@react-native-async-storage/async-storage";
export const authKey = 'auth-key';



export async function storeToken(token:string){
    try{
        await AsyncStorage.setItem(authKey,token);
    }catch(e){
        console.error("Error in saving token");
    }
}




export async function getAuthToken(){
    try{
        const value = await AsyncStorage.getItem(authKey);
        if(value !== null)
        {
            return value;
        }
    }catch(e){
        console.error("Error in getting token");
    }
}



export async function clearStorage(){
    await AsyncStorage.clear();
}