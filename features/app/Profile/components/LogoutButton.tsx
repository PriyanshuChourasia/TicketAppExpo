import ThemedText from "@/components/ThemedText";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import { clearStorage } from "@/services/AuthServices";
import { ProfileContext } from "../context/ProfileContext";







const LogoutButton = () =>{

    const [isLoading,setIsLoading] = useState<boolean>(false);
    const {setProfileData} = useContext(ProfileContext);

    const router = useRouter();

    const handleLogout = () => {
        setIsLoading(true);
        clearStorage();
        setProfileData(null);
        setTimeout(() => {
            router.replace('/(public)/login');
            setIsLoading(false);
        }, 900);

    }


    return(
        <>
        <Button 
            onPress={handleLogout}
            loading={isLoading}
            style={ButtonStyle.container} 
            rippleColor={'white'} 
            buttonColor="white" 
            icon={()=><AntDesign name="logout" size={22} color="red" />} 
            
            mode="elevated">
            <ThemedText style={ButtonStyle.textStyle} size="lg" fontWt="medium">
                Logout
            </ThemedText>
        </Button>
        </>
    )
}


export default LogoutButton;



const ButtonStyle = StyleSheet.create({
    container:{
        paddingVertical:8,
        paddingHorizontal:8,
        borderColor:'red',
        borderWidth:1
    },
    textStyle:{
        color:'red'
    }
})