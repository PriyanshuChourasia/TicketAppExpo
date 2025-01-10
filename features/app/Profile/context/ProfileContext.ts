import { createContext } from "react";
import { ProfileInitialState } from "../initialState/ProfileInitialState";
import { IProfileInterface } from "../interface/ProfileInterface";






interface ProfileProps{
    profileData: IProfileInterface | null;
    setProfileData: React.Dispatch<React.SetStateAction<IProfileInterface | null>>;
}


const defaultValue:ProfileProps={
    profileData:ProfileInitialState,
    setProfileData:() =>{}
}


export const ProfileContext = createContext(defaultValue);