import { SuccessInterface } from "@/features/interface/SuccessInterface";

export interface ILoginTokenResponse extends SuccessInterface{
    data:{
        access_token:string,
        refresh_token:string,
        status:number
    },
    error:{
        message:string,
        error:string,
        status:number
    }
}