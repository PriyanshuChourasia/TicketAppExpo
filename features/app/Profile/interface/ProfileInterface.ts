import { SuccessInterface } from "@/features/interface/SuccessInterface"

export interface IProfileInterface extends SuccessInterface{
    data:{
        id: string,
        username: string,
        firstName:string,
        lastName:string,
        phoneNumber:number,
        email: string,
    },
    code: number,
}