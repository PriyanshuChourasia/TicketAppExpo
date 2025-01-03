import ContainerView from "@/components/ContainerView";
import { AuthContext } from "@/context/AuthContext/AuthContext";
import { clearStorage } from "@/services/AuthServices";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import { Button, Text } from "react-native";


const Profile = () =>{

    const router = useRouter();
    const {setIsAuthenticated} = useContext(AuthContext);

    const handlePress = () =>{
        clearStorage();
        setIsAuthenticated(false);
        router.replace('/(public)/login');
    }

    return(
        <ContainerView>
            <Text>Profile</Text>
            <Button onPress={handlePress} title="Logout" />
        </ContainerView>
    )
}


export default Profile;