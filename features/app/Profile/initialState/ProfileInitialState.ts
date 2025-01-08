import { IProfileInterface } from "../interface/ProfileInterface";

export const ProfileInitialState:IProfileInterface={
    data:{
        id: '',
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: 0
    },
    code:0,
    success:false
}