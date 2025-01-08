import { ThemedContainer } from "@/components/ThemedContainer";
import ProfileScreen from "@/features/app/Profile/ProfileScreen";
import React from "react";


const Profile = () =>{

    return(
        <ThemedContainer style={{flex:1}}>
            <ProfileScreen/>
        </ThemedContainer>
    )
}


export default Profile;