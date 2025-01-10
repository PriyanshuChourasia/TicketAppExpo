import { useQuery } from "@tanstack/react-query"
import { getAllGroupDataById } from "../services/api"
import { get_item_group_by_id } from "../services/queryKey"





export const useGetGroupItemById = (user_id:string) =>{
    return useQuery({
        queryKey:[get_item_group_by_id],
        queryFn:() => getAllGroupDataById(user_id),
        retry:false,
        refetchOnMount:true,
        refetchOnWindowFocus:false,
        enabled: !!user_id
    })
}