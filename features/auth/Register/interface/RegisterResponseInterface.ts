import { SuccessInterface } from "@/features/interface/SuccessInterface";

export interface IRegisterResponseInterface extends SuccessInterface{
    data:{
        id:string;
        username:string;
        email:string;
    },
    errors: {
        message: string
    }
    code:number;
}