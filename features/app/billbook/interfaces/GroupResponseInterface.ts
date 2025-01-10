import { SuccessInterface } from "@/features/interface/SuccessInterface";

export interface IGroupResponseInterface{
    id:string;
    name:string;
    alias:string;
}




export interface IGroupResponseDetailsInterface extends SuccessInterface{
    data: IGroupResponseInterface[];
    code:number;
    status:string;
}
