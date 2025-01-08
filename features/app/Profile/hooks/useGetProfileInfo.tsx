import { useQuery } from "@tanstack/react-query"
import { profile_query_key } from "../services/queryKey"
import { getProfileInfo } from "../services/api"








export const useGetProfileInfo = () =>{
    return useQuery({
        queryKey:[profile_query_key],
        queryFn:()=> getProfileInfo(),
        retry:false,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
        enabled:true
    });
}