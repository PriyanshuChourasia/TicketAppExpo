import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getAllGroupDataById, postGroupData } from "../services/api"
import { IGroupRequestInterface } from "../interfaces/GroupRequestInterface"
import Toast from "react-native-toast-message"
import { Alert } from "react-native"
import { get_item_group_by_id, post_item_group } from "../services/queryKey"
import { useContext } from "react"
import { ProfileContext } from "../../Profile/context/ProfileContext"




export const usePostItemGroupData =  () =>{

    const queryClient = useQueryClient();
    const {profileData} = useContext(ProfileContext);


    return useMutation({
        mutationKey:[post_item_group],
        mutationFn:async (request:IGroupRequestInterface)=>{
            return await postGroupData(request);
        },
        retry:false,
        onSuccess(data){
            Toast.show({
                text1:"Data Saved",
                text2:`${data.data.name} created successfully`,
                visibilityTime: 1500,
                type:"success"
            });
            queryClient.fetchQuery({queryKey:[get_item_group_by_id],
                queryFn:()=> getAllGroupDataById(profileData ? profileData.data.id : '')
            });
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