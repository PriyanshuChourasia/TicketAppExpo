import { createContext } from "react";
import { ProfileInitialState } from "../initialState/ProfileInitialState";
import { IProfileInterface } from "../interface/ProfileInterface";






interface ProfileProps{
    profileData: IProfileInterface;
    setProfileData: React.Dispatch<React.SetStateAction<IProfileInterface>>;
}


const defaultValue:ProfileProps={
    profileData:ProfileInitialState,
    setProfileData:() =>{}
}


export const ProfileContext = createContext(defaultValue);