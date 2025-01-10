import { ProfileInitialState } from "../initialState/ProfileInitialState"
import { IProfileInterface } from "../interface/ProfileInterface"
import { ProfileContext } from "./ProfileContext"
import React, { useState } from "react"






export const ProfileProvider = ({children}:any) =>{

    const [profileData,setProfileData] = useState<IProfileInterface | null>(ProfileInitialState);

    return(
        <ProfileContext.Provider value={{
            profileData,setProfileData
        }}>
            {children}
        </ProfileContext.Provider>
    )
}